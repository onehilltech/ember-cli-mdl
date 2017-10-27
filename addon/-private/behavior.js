import Ember from 'ember';

/**
 * Base class for all material design lite components. This class ensures that elements
 * dynamically added to the application are upgraded.
 */
export default Ember.Object.extend ({
  mergedProperties: ['behaviorOptions'],

  _component: null,

  component: Ember.computed ({
    set (key, value) {
      if (Ember.isNone (value)) {
        this.willDetachFromComponent ();
      }

      this._component = value;

      if (!Ember.isNone (value)) {
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
