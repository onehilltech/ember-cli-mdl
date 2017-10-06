import Component from '../-private/component';
import RippleEffectMixin from '../-private/mixins/ripple-effect';
import ButtonMixin from '../-private/mixins/button';

import layout from '../templates/components/mdl-button';

export default Component.extend (ButtonMixin, RippleEffectMixin, {
  layout,

  tagName: 'button'
});
