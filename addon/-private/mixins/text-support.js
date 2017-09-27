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

  didInsertElement () {
    this._super (...arguments);
    this.didInsertInputElement (...arguments);

    // Insert the wrapper element for the input.
    this.$ ().wrap (`<div class="${this.get ('wrapperClassNames')}"></div>`);
    let $wrapper = this.$().parent ();

    // Insert the label for the input.
    let labelText = this.getWithDefault ('label', '');

    let $label = Ember.$(`<label class="mdl-textfield__label" for="${this.elementId}">${labelText}</label>`);
    let $error = Ember.$('<span class="mdl-textfield__error"></span>');

    $label.insertAfter (this.$());
    $error.insertAfter ($label);

    this.setProperties ({$wrapper: $wrapper, $error: $error, $label: $label});

    // Now, upgrade the wrapper element.
    this.get ('mdl').upgradeElement ($wrapper[0]);

    // Initialize the invalid state.
    let isInvalid = this.getWithDefault ('isInvalid', false);
    $wrapper.toggleClass ('is-invalid', isInvalid);
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

  wrapperClassNames: Ember.computed ('floatingLabel', function () {
    let classNames = 'mdl-textfield mdl-js-textfield';

    if (this.get ('floatingLabel'))
      classNames += ' mdl-textfield--floating-label';

    return classNames;
  }),

  setErrorMessage (message) {
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
            this.setErrorMessage (customError[reason]);
          }
          else {
            this.setErrorMessage (this.element.validationMessage);
          }

          break;
        }
      }
    }
    else {
      this.setErrorMessage (this.element.validationMessage);
    }
  }
});
