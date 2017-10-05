import Ember from 'ember';

export default Ember.Mixin.create ({
  classNames: ['mdl-input'],

  didInsertElement () {
    this._super (...arguments);

    this.$ ().on ('blur', this._validateInput.bind (this));
  },

  _validateInput () {
    let $wrapper = this.get ('$wrapper');

    let isDirty = $wrapper.hasClass ('is-dirty');
    let isInvalid = $wrapper.hasClass ('is-invalid');

    if (isDirty || isInvalid)
      this.validateInput ();
  },

  validateInput () {

  }
});
