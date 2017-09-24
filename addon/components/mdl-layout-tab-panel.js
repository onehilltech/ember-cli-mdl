import Component from '../-private/component';
import layout from '../templates/components/mdl-layout-tab-panel';

export default Component.extend({
  layout,

  tagName: 'section',
  classNames: ['mdl-layout__tab-panel'],
  classNameBindings: ['isActive']
});
