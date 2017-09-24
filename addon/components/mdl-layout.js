import Component from '../-private/component';
import layout from '../templates/components/mdl-layout';

export default Component.extend({
  layout,

  classNames: ['mdl-layout', 'mdl-js-layout'],

  classNameBindings: [
    'fixedDrawer:mdl-layout--fixed-drawer',
    'fixedHeader:mdl-layout--fixed-header',
    'fixedTabs:mdl-layout--fixed-tabs',
    'noDrawerButton:mdl-layout--no-drawer-button',
    'noDesktopDrawerButton:mdl-layout--no-desktop-drawer-button'
  ]
});
