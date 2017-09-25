import Ember from 'ember';
import Component from '../-private/component';
import RippleEffectMixin from '../-private/mixins/ripple-effect-mixin';

import layout from '../templates/components/mdl-tabs';

export default Component.extend (RippleEffectMixin, {
  layout,

  classNames: ['mdl-tabs', 'mdl-js-tabs'],

  rippleEffect: true,

  didInsertElement () {
    this._super (...arguments);
    this._linkTabsToPanels ();
  },

  didUpdate () {
    this._super (...arguments);
    this._linkTabsToPanels ();
  },

  _linkTabsToPanels () {
    let $tabs = this.$ ('.mdl-tabs__tab-bar > .mdl-tabs__tab');
    let $panels = this.$ ('.mdl-tabs__panel');
    let activeTab = this.getWithDefault ('activeTab', 0);

    for (let i = 0, len = $tabs.length; i < len; ++i) {
      let tab = $tabs[i];
      let panel = $panels[i];

      // Bind the tab to the panel.
      tab.href = `#${panel.id}`;

      // Mark the tab and panel as active, or inactive.
      let isActive = activeTab === i;
      Ember.$(tab).toggleClass ('is-active', isActive);
      Ember.$(panel).toggleClass ('is-active', isActive);
    }
  }
});
