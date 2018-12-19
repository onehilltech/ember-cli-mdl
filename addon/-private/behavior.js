import { isNone } from '@ember/utils';
import EmberObject, { computed } from '@ember/object';

/**
 * Base class for all material design lite components. This class ensures that elements
 * dynamically added to the application are upgraded.
 */
export default EmberObject.extend ({
  _component: null,

  component: computed ({
    set (key, value) {
      if (isNone (value)) {
        this.willDetachFromComponent ();
      }

      this._component = value;

      if (!isNone (value)) {
        this.didAttachToComponent ();
      }

      return value;
    },

    get () {
      return this._component;
    }
  }),

  /**
   * The bahavior was attached to a component.
   */
  didAttachToComponent () {

  },

  /**
   * The behavior will detach from the component.
   */
  willDetachFromComponent () {

  }
});
