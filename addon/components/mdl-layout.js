import Component from '../-private/component';
import layout from '../templates/components/mdl-layout';

export default Component.extend({
  layout,

  classNames: ['mdl-layout', 'mdl-js-layout'],

  classNameBindings: [
    'hasFixedDrawer:mdl-layout--fixed-drawer',
    'hasFixedHeader:mdl-layout--fixed-header']
});
