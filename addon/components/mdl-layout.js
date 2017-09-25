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
  ],

  didInsertElement () {
    this._super (...arguments);
    this._linkTabsToPanels ();
  },

  didUpdate () {
    this._super (...arguments);
    this._linkTabsToPanels ();
  },

  _linkTabsToPanels () {
    let $tabs = this.$ ('.mdl-layout__header > .mdl-layout__tab-bar-container > .mdl-layout__tab-bar > .mdl-layout__tab');
    let $panels = this.$ ('.mdl-layout__content > .mdl-layout__tab-panel');

    for (let i = 0, len = $tabs.length; i < len; ++ i)
      $tabs[i].href = `#${$panels[i].id}`;
  }
});
