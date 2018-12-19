import Component from '@ember/component';
import layout from '../templates/components/mdl-radio';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Component.extend (ToggleSupportMixin, {
  layout,

  tagName: 'input',

  attributeBindings: ['checked', 'name', 'value'],

  classNames: ['mdl-radio__button'],

  wrapperClassNames: ['mdl-radio', 'mdl-js-radio'],

  labelClassName: ['mdl-radio__label'],

  init () {
    this._super (...arguments);
  },

  willRender () {
    this._super (...arguments);
  },

  didInsertElement () {
    this._super (...arguments);
    this.element.type = 'radio';
  }
});
