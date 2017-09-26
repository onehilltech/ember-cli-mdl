import Component from '../-private/component';
import layout from '../templates/components/mdl-list-item-text-body';

export default Component.extend({
  layout,

  tagName: 'span',

  classNames: ['mdl-list__item-text-body']
});
