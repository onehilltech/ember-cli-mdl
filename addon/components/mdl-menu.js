import Ember from 'ember';

import Component from '../-private/component';
import RippleEffectMixin from '../-private/mixins/ripple-effect';
import layout from '../templates/components/mdl-menu';

export default Component.extend (RippleEffectMixin, {
  layout,

  tagName: 'ul',

  classNames: ['mdl-menu', 'mdl-js-menu'],

  classNameBindings: ['positionClassName'],

  rippleEffect: true,

  attributeBindings: ['for'],

  didReceiveAttrs () {
    this._super (...arguments);

    let position = this.get ('position');
    let positionClassName = Ember.isEmpty (position) ? null : `mdl-menu--${Ember.String.dasherize (position)}`;

    this.set ('positionClassName', positionClassName);
  }
});
