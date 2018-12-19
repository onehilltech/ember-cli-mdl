import { inject as service } from '@ember/service';
import Component from '@ember/component';
import TooltipSupport from './mixins/tooltip-support';
import LayoutSupport from './mixins/layout-support';

/**
 * Base class for all material design lite components. This class ensures that elements
 * dynamically added to the application are upgraded.
 */
export default Component.extend (LayoutSupport, TooltipSupport, {
  mdl: service (),

  didInsertElement () {
    this._super (...arguments);

    this.get ('mdl').upgradeElement (this.element);
  },

  willDestroyElement () {
    this._super (...arguments);

    this.get ('mdl').downgradeElements (this.element);
  }
});
