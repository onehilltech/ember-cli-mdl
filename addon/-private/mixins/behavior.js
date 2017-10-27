import Ember from 'ember';

export default Ember.Mixin.create ({
  initBehavior: Ember.on ('didReceiveAttrs', function () {
    let behaviorName = Ember.get (this, 'behavior');

    if (Ember.isPresent (behaviorName)) {
      let registryName = Ember.String.dasherize (behaviorName);
      let behaviorFullName = `behavior:${registryName}`;

      let owner = Ember.getOwner (this);
      let BehaviorClass = owner.resolveRegistration (behaviorFullName);

      if (Ember.isNone (BehaviorClass)) {
        return;
      }

      let behaviorOptions = Ember.getWithDefault (this, 'behaviorOptions', {});
      let behavior = BehaviorClass.create ({});

      Ember.set (this, '_behavior', behavior);

      behavior.setProperties (behaviorOptions);
    }
  }),

  attachBehavior: Ember.on ('didInsertElement', function () {
    let behavior = Ember.get (this, '_behavior');

    if (Ember.isPresent (behavior)) {
      behavior.set ('component', this);
    }
  }),

  detachBehavior: Ember.on ('willDestroyElement', function () {
    let behavior = Ember.get (this, '_behavior');

    if (Ember.isPresent (behavior)) {
      behavior.set ('component', null);
    }
  })
});
