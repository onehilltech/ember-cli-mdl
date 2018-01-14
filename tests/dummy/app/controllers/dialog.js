import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    agree () {
      return true;
    },

    showConfirmDialog () {
      this.set ('confirm', true);
    }
  }
});
