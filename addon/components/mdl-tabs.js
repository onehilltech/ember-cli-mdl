import Component from '../-private/component';
import layout from '../templates/components/mdl-tabs';

export default Component.extend({
  layout,

  classNames: ['mdl-tabs', 'mdl-js-tabs'],
  classNameBindings: ['rippleEffect:mdl-js-ripple-effect']
});
