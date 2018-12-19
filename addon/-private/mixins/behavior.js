import { getOwner } from '@ember/application';
import { dasherize } from '@ember/string';
import { isPresent, isNone } from '@ember/utils';
import { get, getWithDefault, set } from '@ember/object';
import { on } from '@ember/object/evented';
import Mixin from '@ember/object/mixin';

export default Mixin.create ({
  initBehavior: on ('didReceiveAttrs', function () {
    let behaviorName = get (this, 'behavior');

    if (isPresent (behaviorName)) {
      let registryName = dasherize (behaviorName);
      let behaviorFullName = `behavior:${registryName}`;

      let owner = getOwner (this);
      let BehaviorClass = owner.resolveRegistration (behaviorFullName);

      if (isNone (BehaviorClass)) {
        return;
      }

      let behaviorOptions = getWithDefault (this, 'behaviorOptions', {});
      let behavior = BehaviorClass.create ({});

      set (this, '_behavior', behavior);

      behavior.setProperties (behaviorOptions);
    }
  }),

  attachBehavior: on ('didInsertElement', function () {
    let behavior = get (this, '_behavior');

    if (isPresent (behavior)) {
      behavior.set ('component', this);
    }
  }),

  detachBehavior: on ('willDestroyElement', function () {
    let behavior = get (this, '_behavior');

    if (isPresent (behavior)) {
      behavior.set ('component', null);
    }
  })
});
