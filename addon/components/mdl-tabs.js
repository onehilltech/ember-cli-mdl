import Component from '../-private/component';
import TabsMixin from '../-private/mixins/tabs';
import RippleEffectMixin from '../-private/mixins/ripple-effect';

import layout from '../templates/components/mdl-tabs';

export default Component.extend (TabsMixin, RippleEffectMixin, {
  layout,

  classNames: ['mdl-tabs', 'mdl-js-tabs'],

  rippleEffect: true,

  didInsertElement () {
    this._super (...arguments);
    this.didInsertTabs ();
  },

  willUpdate () {
    this._super (...arguments);
    this.willUpdateTabs ();
  },

  didUpdate () {
    this._super (...arguments);
    this.didUpdateTabs ();
  },

  _tabsSelector: '.mdl-tabs__tab-bar > .mdl-tabs__tab',

  _panelsSelector: '.mdl-tabs__panel',
});
