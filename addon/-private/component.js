import Ember from 'ember';
import TooltipSupport from './mixins/tooltip-support';

/**
 * Base class for all material design lite components. This class ensures that elements
 * dynamically added to the application are upgraded.
 */
export default Ember.Component.extend (TooltipSupport, {
  mdl: Ember.inject.service (),

  didInsertElement () {
    this._super (...arguments);

    this.get ('mdl').upgradeElement (this.element);
  },

  willDestroyElement () {
    this._super (...arguments);

    this.get ('mdl').downgradeElements (this.element);
  }
});
