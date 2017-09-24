import Component from '../-private/component';
import layout from '../templates/components/mdl-grid';

export default Component.extend({
  layout,

  classNames: ['mdl-grid'],

  classNameBindings: [
    'noSpacing:mdl-grid--no-spacing'
  ]
});
