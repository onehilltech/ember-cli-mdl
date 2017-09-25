import Component from '../-private/component';
import layout from '../templates/components/mdl-layout-tab-bar';

export default Component.extend({
  layout,

  classNames: ['mdl-layout__tab-bar'],

  classNameBindings: ['isTabManualSwitch:mdl-layout__tab-manual-switch'],
});
