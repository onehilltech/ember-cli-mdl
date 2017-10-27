import Ember from 'ember';
import BehaviorMixin from './behavior';

export default Ember.Mixin.create (BehaviorMixin, {
  classNames: ['mdl-button', 'mdl-js-button'],

  classNameBindings: [
    'colored:mdl-button--colored',
    'primary:mdl-button--primary',
    'accent:mdl-button--accent',
    'typeClassName'
  ],

  attributeBindings: ['disabled'],

  typeClassName: Ember.computed ('type', function () {
    let type = this.get ('type');
    return Ember.isEmpty (type) ? null : `mdl-button--${type}`;
  }),

  /// By default, the buttons have a ripple effect.
  rippleEffect: true
});
