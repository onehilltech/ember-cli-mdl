import Ember from 'ember';

export default Ember.Mixin.create ({
  mdl: Ember.inject.service (),

  concatenatedProperties: ['wrapperClassNames', 'labelClassName'],

  didInsertElement () {
    this._super (...arguments);

    this.$ ().wrap (`<label class="${this.get ('wrapperClassNames').join (' ')}" for="${this.elementId}"></label>`);
    let $wrapper = this.$().parent ();

    // Insert the radio label after the input tag (i.e., this element).
    let $label = Ember.$(`<span class="${this.get ('labelClassName').join (' ')}">${this.get ('label')}</span>`);
    $label.insertAfter (this.$());

    this.setProperties ({$wrapper: $wrapper, $label: $label});

    this._applyRippleEffect ();

    this.get ('mdl').upgradeElement ($wrapper[0]);
  },

  willDestroyElement () {
    this._super (...arguments);
    let {$wrapper, $label} = this.getProperties ('$wrapper', '$label');

    // Downgrade the wrapper element, and delete the label element.
    this.get ('mdl').downgradeElements ($wrapper[0]);
    $label.remove ();

    // Last, unwrap the current element.
    this.$().unwrap ();
  },

  didUpdate () {
    this._super (...arguments);
    this._applyRippleEffect ();
  },

  _applyRippleEffect () {
    this.get ('$wrapper').toggleClass ('mdl-js-ripple-effect', this.getWithDefault ('rippleEffect'));
  }
});