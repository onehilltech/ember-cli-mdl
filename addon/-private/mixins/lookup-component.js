import { getOwner } from '@ember/application';
import Mixin from '@ember/object/mixin';

export default Mixin.create ({
  lookupComponent (id) {
    return getOwner (this).lookup ('-view-registry:main') [id];
  }
});