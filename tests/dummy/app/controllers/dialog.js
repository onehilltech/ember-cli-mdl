import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    agree () {
      return false;
    },

    showConfirmDialog () {
      this.set ('confirm', true);
    }
  }
});
