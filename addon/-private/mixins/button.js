import Ember from 'ember';
import BehaviorMixin from './behavior';
import RippleEffectMixin from './ripple-effect';

const colorMapping = {
  primary: 'mdl-button--primary',
  accent: 'mdl-button--accent'
};

export default Ember.Mixin.create (RippleEffectMixin, BehaviorMixin, {
  tagName: 'button',

  classNames: ['mdl-button', 'mdl-js-button'],

  classNameBindings: [
    'colored:mdl-button--colored',
    'colorClassName',
  ],

  /// The default button type. Other options include 'submit' and 'reset'.
  type: 'button',

  attributeBindings: ['value', 'type', 'disabled'],

  colorClassName: Ember.computed ('color', function () {
    let color = this.get ('color');
    return colorMapping[color];
  }),

  /// By default, the buttons have a ripple effect.
  rippleEffect: true
});
