import Ember from 'ember';

/**
 * Base class for all material design lite components. This class ensures that elements
 * dynamically added to the application are upgraded.
 */
export default Ember.LinkComponent.extend ({
  mdl: Ember.inject.service (),

  didInsertElement () {
    this._super (...arguments);

    this.get ('mdl').upgradeElement (this.element);
  }
});
