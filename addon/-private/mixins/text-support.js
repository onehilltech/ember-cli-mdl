import Ember from 'ember';
import InputMixin from './input';

const VALIDATION_ERROR_TYPE = [
  'badInput',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'valueMissing',
  'typeMismatch',
];

export default Ember.Mixin.create (InputMixin, {
  mdl: Ember.inject.service (),

  classNames: ['mdl-textfield__input'],

  floatingLabel: true,

  didInsertElement () {
    this._super (...arguments);

    // Insert the wrapper element for the input.
    this.$ ().wrap (`<div class="mdl-textfield mdl-js-textfield"></div>`);
    let $wrapper = this.$().parent ();

    // Insert the label for the input.
    let labelText = this.getWithDefault ('label', '');

    let $label = Ember.$(`<label class="mdl-textfield__label" for="${this.elementId}">${labelText}</label>`);
    let $error = Ember.$('<span class="mdl-textfield__error"></span>');

    $label.insertAfter (this.$());
    $error.insertAfter ($label);

    this.setProperties ({$wrapper: $wrapper, $error: $error, $label: $label});

    this._toggleWrapperClassNames ();

    // Handle the error message.
    this.setErrorMessage (this.get ('errorMessage'));

    // Now, upgrade the wrapper element.
    this.get ('mdl').upgradeElement ($wrapper[0]);

    // If the element is required and the validity is value missing, then
    // we need to remove the is-invalid class from the element because input
    // has just been rendered. We should not worry about validity until the
    // input is dirty.
    if (this.element.required && this.element.validity.valueMissing) {
      $wrapper.removeClass ('is-invalid');
    }
  },

  didUpdateAttrs () {
    this._super (...arguments);
    this._toggleWrapperClassNames ();

    // Handle the error message.
    this.setErrorMessage (this.get ('errorMessage'));
  },

  willDestroyElement () {
    this._super (...arguments);

    // Downgrade the wrapper element, delete the label element and error,
    // then unwrap (or delete) the wrapper element.

    let {$wrapper, $error, $label} = this.getProperties ('$wrapper', '$label', '$error');
    this.get ('mdl').downgradeElements ($wrapper[0]);

    $label.remove ();
    $error.remove ();

    this.$().unwrap ();

    this.setProperties ({$wrapper: null, $label: null, $error: null});
  },
  
  _toggleWrapperClassNames () {
    let $wrapper = this.get ('$wrapper');

    $wrapper.toggleClass ('is-disabled', this.getWithDefault ('disabled', false));
    $wrapper.toggleClass ('is-invalid', this.getWithDefault ('isInvalid', false));
    $wrapper.toggleClass ('is-focused', this.getWithDefault ('isFocused', false));
    $wrapper.toggleClass ('mdl-textfield--floating-label', this.getWithDefault ('floatingLabel', false));
    $wrapper.toggleClass ('mdl-textfield--align-right', this.getWithDefault ('alignRight', false));
    $wrapper.toggleClass ('mdl-textfield--full-width', this.getWithDefault ('fullWidth', false));
  },

  setErrorMessage (message) {
    let $wrapper = this.get ('$wrapper');

    if (Ember.isEmpty (message)) {
      // Make sure there is not custom error set for the input. This also
      // includes removing the invalid class from the wrapper.
      if (this.element.validity.customError) {
        this.element.setCustomValidity ('');
        this._setErrorMessageText ('');

        $wrapper.toggleClass ('is-invalid', false);
      }
    }
    else {
      // Update the custom error message.
      this.element.setCustomValidity (message);
      this._setErrorMessageText (message);

      // Make sure the wrapper class has the invalid class.
      $wrapper.toggleClass ('is-invalid', true);
    }
  },

  _setErrorMessageText (message) {
    this.get ('$error').text (message);
  },

  validateInput () {
    this._super (...arguments);

    if (this.element.validity.valid)
      return;

    let customError = this.get ('customError');

    if (Ember.isPresent (customError)) {
      // We are going to attempt to show a custom error message. This is only
      // possible if we have defined a error message that corresponds to the
      // failed validation type.

      for (let i = 0, len = VALIDATION_ERROR_TYPE.length; i < len; ++i) {
        const reason = VALIDATION_ERROR_TYPE[i];
        const failed = this.element.validity[reason];

        if (failed) {
          if (Ember.isPresent (customError[reason])) {
            this._setErrorMessageText (customError[reason]);
          }
          else {
            this._setErrorMessageText (this.element.validationMessage);
          }

          break;
        }
      }
    }
    else {
      this._setErrorMessageText (this.element.validationMessage);
    }
  }
});
