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

    for (let i = 0, len = $tabs.length; i < len; ++ i)
      $tabs[i].href = `#${$panels[i].id}`;
  }
});
