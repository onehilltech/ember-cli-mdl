import Component from '../-private/component';
import layout from '../templates/components/mdl-layout-header';

export default Component.extend({
  layout,

  tagName: 'header',

  classNames: ['mdl-layout__header'],

  classNameBindings: [
    'transparent:mdl-layout__header--transparent',
    'waterfall:mdl-layout__header--waterfall',
    'waterfallHideTop:mdl-layout__header--waterfall-hide-top',
    'seamed:mdl-layout__header--seamed',
    'scroll:mdl-layout__header--scroll'
  ],

  transparent: false,
});
