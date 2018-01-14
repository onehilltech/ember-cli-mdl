import Component from '../-private/component';
import layout from '../templates/components/mdl-slider';
import Ember from 'ember';

export default Component.extend({
  layout,

  tagName: 'input',

  classNames: ['mdl-slider', 'mdl-js-slider'],

  attributeBindings: ['min','max','value','step','disabled'],

  didInsertElement () {
    this._super (...arguments);

    this.$ ().attr ('type', 'range');
  },

  didReceiveAttrs () {
    this._super (...arguments);

    if (this.MaterialSlider) {
      let value = Ember.get (this, 'attrs.value');

      if (Ember.isPresent (value)) {
        this.MaterialSlider.change (value);
      }
    }
  }
});
