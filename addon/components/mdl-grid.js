import Component from '../-private/component';
import layout from '../templates/components/mdl-grid';

export default Component.extend({
  layout,

  classNames: ['mdl-grid'],

  classNameBindings: ['spacing::mdl-grid--no-spacing'],

  spacing: true,
});
