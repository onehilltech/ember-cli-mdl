import Ember from 'ember';

import Component from '../-private/component';
import RippleEffectMixin from '../-private/mixins/ripple-effect-mixin';
import ButtonMixin from '../-private/mixins/button';

import layout from '../templates/components/mdl-button';

export default Component.extend (ButtonMixin, RippleEffectMixin, {
  layout,

  tagName: 'button'
});
