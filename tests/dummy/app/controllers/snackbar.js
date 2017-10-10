import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showSnackbar () {
      this.set ('message', 'Send an alert?')
    },

    alert () {
      alert ('Hello, World!');
    }
  }
});
