import Ember from 'ember';
import BehaviorMixin from '../mixins/behavior';
import RippleEffectMixin from '../mixins/ripple-effect';

import layout from '../../templates/components/mdl-button';

const colorMapping = {
  primary: 'mdl-button--primary',
  accent: 'mdl-button--accent'
};

/**
 * @class AbstractButton
 *
 * Base class for all buttons.
 */
export default Ember.Component.extend (RippleEffectMixin, BehaviorMixin, {
  layout,

  tagName: 'button',

  classNames: ['mdl-button', 'mdl-js-button'],

  classNameBindings: [
    'colored:mdl-button--colored',
    'colorClassName',
  ],

  attributeBindings: ['disabled'],

  colorClassName: Ember.computed ('color', function () {
    let color = this.get ('color');
    return colorMapping[color];
  }),

  /// By default, the buttons have a ripple effect.
  rippleEffect: true
});
