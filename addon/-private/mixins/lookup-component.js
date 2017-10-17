import Ember from 'ember';

export default Ember.Mixin.create ({
  lookupComponent (id) {
    return Ember.getOwner (this).lookup ('-view-registry:main') [id];
  }
});