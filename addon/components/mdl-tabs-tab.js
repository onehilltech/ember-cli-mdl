import Component from '../-private/component';
import layout from '../templates/components/mdl-tabs-tab';

export default Component.extend({
  layout,

  tagName: 'a',

  classNames: ['mdl-tabs__tab'],
  classNameBindings: ['isActive'],
  attributeBindings: ['href']
});
