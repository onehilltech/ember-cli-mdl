import Ember from 'ember';
import TooltipSupport from './tooltip-support';

export default Ember.Mixin.create (TooltipSupport, {
  classNames: ['mdl-input'],

  didInsertElement () {
    this._super (...arguments);

    this.$ ().on ('blur', this._onBlur.bind (this));
  },

  _onBlur () {
    let $wrapper = this.get ('$wrapper');

    let isDirty = $wrapper.hasClass ('is-dirty') || this.get ('isDirty');
    let isInvalid = $wrapper.hasClass ('is-invalid');

    if (isDirty || isInvalid) {
      // Reset the custom error message.
      this.set ('errorMessage');

      // Validate the input.
      Ember.run (function () {
        this.validateInput ();
      }.bind (this));
    }
  },

  validateInput () {

  }
});
