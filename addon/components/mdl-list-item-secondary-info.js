import Component from '../-private/component';
import layout from '../templates/components/mdl-list-item-secondary-info';

export default Component.extend({
  layout,

  tagName: 'span',

  classNames: ['mdl-list__item-secondary-info']
});
