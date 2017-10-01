import Component from '../-private/component';
import TabsMixin from '../-private/mixins/tabs';

import layout from '../templates/components/mdl-layout';

export default Component.extend (TabsMixin, {
  layout,

  classNames: ['mdl-layout', 'mdl-js-layout'],

  classNameBindings: [
    'fixedDrawer:mdl-layout--fixed-drawer',
    'fixedHeader:mdl-layout--fixed-header',
    'fixedTabs:mdl-layout--fixed-tabs',
    'noDrawerButton:mdl-layout--no-drawer-button',
    'noDesktopDrawerButton:mdl-layout--no-desktop-drawer-button'
  ],

  _tabsSelector: '.mdl-layout__header > .mdl-layout__tab-bar-container > .mdl-layout__tab-bar > .mdl-layout__tab',

  _panelsSelector: '.mdl-layout__content > .mdl-layout__tab-panel',

  didInsertElement () {
    this._super (...arguments);
    this.didInsertTabs ();
  },

  willDestroyElement () {
    this._super (...arguments);

    // Remove the wrapper layout class since downgrading the element
    // will not remove the wrapper class that was added to make this
    // component work.
    this.$().unwrap ();
  },

  willUpdate () {
    this._super (...arguments);
    this.willUpdateTabs ();
  },

  didUpdate () {
    this._super (...arguments);
    this.didUpdateTabs ();
  }
});
