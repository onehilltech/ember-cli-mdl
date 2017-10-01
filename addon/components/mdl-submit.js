import Ember from 'ember';
import layout from '../templates/components/mdl-submit';

export default Ember.Component.extend({
  layout,

  tagName: 'input',

  attributeBindings: ['disabled', 'value'],

  value: 'Submit',

  didInsertElement () {
    this._super (...arguments);
    this.element.type = 'submit';
  }
});
