import Component from '../-private/component';
import ButtonMixin from '../-private/mixins/button';
import layout from '../templates/components/mdl-submit';

export default Component.extend (ButtonMixin, {
  layout,

  tagName: 'input',

  attributeBindings: ['disabled', 'value'],

  value: 'Submit',

  didInsertElement () {
    this._super (...arguments);
    this.element.type = 'submit';
  }
});
