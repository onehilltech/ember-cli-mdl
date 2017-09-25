import Component from '../-private/component';
import layout from '../templates/components/mdl-layout-tab';

export default Component.extend({
  layout,

  tagName: 'a',

  classNames: ['mdl-layout__tab'],

  classNameBindings: ['isActive'],

  attributeBindings: ['href']
});
