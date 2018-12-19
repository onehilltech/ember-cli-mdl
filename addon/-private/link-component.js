import { inject as service } from '@ember/service';
import LinkComponent from '@ember/routing/link-component';

/**
 * Base class for all material design lite components. This class ensures that elements
 * dynamically added to the application are upgraded.
 */
export default LinkComponent.extend ({
  mdl: service (),

  didInsertElement () {
    this._super (...arguments);

    this.get ('mdl').upgradeElement (this.element);
  }
});
