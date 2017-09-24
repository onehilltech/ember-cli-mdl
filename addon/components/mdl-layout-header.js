import Component from '../-private/component';
import layout from '../templates/components/mdl-layout-header';

export default Component.extend({
  layout,

  tagName: 'header',

  classNames: ['mdl-layout__header'],

  classNameBindings: ['isTransparent:mdl-layout__header--transparent'],

  isTransparent: false,
});
