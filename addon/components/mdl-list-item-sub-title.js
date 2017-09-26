import Component from '../-private/component';
import layout from '../templates/components/mdl-list-item-sub-title';

export default Component.extend({
  layout,

  tagName: 'span',

  classNames: ['mdl-list__item-sub-title']
});
