import $ from 'jquery';
import { isNone } from '@ember/utils';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create ({
  _activeTabSelector: computed ('_tabsSelector', function () {
    return `${this.get ('_tabsSelector')}.is-active`;
  }),

  didInsertTabs () {
    let activeTab = this.getWithDefault ('activeTab', 0);

    this._cacheTabsAndPanels ();
    this._linkTabsToPanels (activeTab);
  },

  willUpdateTabs () {
    // Save the current active tab while we are complete the update. This
    // will allow us to restore the tab if the number of tabs change. We
    // also store the id of the tab, and not the index of the tab. This is
    // because the index could change (i.e., a reordering of tabs), but the
    // ids of the existing tabs should not change.

    let selector = this.get ('_activeTabSelector');
    let $activeTabs = this.$ (selector);
    let activeTab = $activeTabs.length === 1 ?  $activeTabs[0] : null;

    this.set ('_activeTab', activeTab);
  },

  didUpdateTabs () {
    // Cache the tabs and panels for quicker access.
    this._cacheTabsAndPanels ();

    let activeTab = this.get ('_activeTab');
    let activeTabIndex = isNone (activeTab) ? 0 : this.get ('$tabs').index (activeTab);

    if (activeTabIndex === -1)
      activeTabIndex = 0;

    this._linkTabsToPanels (activeTabIndex);
  },

  _cacheTabsAndPanels () {
    let $tabs = this.$ (this.get ('_tabsSelector'));
    let $panels = this.$ (this.get ('_panelsSelector'));

    this.setProperties ({$tabs: $tabs, $panels: $panels});
  },

  _linkTabsToPanels (activeTab) {
    let {$tabs, $panels} = this.getProperties ('$tabs', '$panels');

    for (let i = 0, len = $tabs.length; i < len; ++i) {
      let tab = $tabs[i];
      let panel = $panels[i];

      // Bind the tab to the panel.
      tab.href = `#${panel.id}`;

      // Mark the tab and panel as active, or inactive.
      let isActive = activeTab === i;
      $(tab).toggleClass ('is-active', isActive);
      $(panel).toggleClass ('is-active', isActive);
    }
  }
});
