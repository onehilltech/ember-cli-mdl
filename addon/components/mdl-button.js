import Component from '../-private/component';
import Ember from 'ember';
import layout from '../templates/components/mdl-button';
import RippleEffectMixin from '../-private/mixins/ripple-effect-mixin';

export default Component.extend (RippleEffectMixin, {
  layout,

  tagName: 'button',

  classNames: ['mdl-button', 'mdl-js-button'],

  classNameBindings: [
    'colored:mdl-button--colored',
    'primary:mdl-button--primary',
    'accent:mdl-button--accent',
    'typeClassName'
  ],

  typeClassName: Ember.computed ('type', function () {
    return `mdl-button--${this.get ('type')}`;
  }),

  /// The default button type is raised.
  type: 'raised',

  /// By default, the buttons have a ripple effect.
  rippleEffect: true
});
