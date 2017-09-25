import Component from '../-private/component';
import RippleEffectMixin from '../-private/mixins/ripple-effect-mixin';

import layout from '../templates/components/mdl-tabs';

export default Component.extend (RippleEffectMixin, {
  layout,
  classNames: ['mdl-tabs', 'mdl-js-tabs'],

  rippleEffect: true
});
