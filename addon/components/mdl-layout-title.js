import Component from '../-private/component';
import layout from '../templates/components/mdl-layout-title';

export default Component.extend({
  layout,

  tagName: 'span',

  classNames: ['mdl-layout-title']
});
