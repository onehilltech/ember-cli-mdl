import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showSnackbar () {
      this.set ('message', 'Send an alert?')
    },

    alert () {
      alert ('Hello, World!');
    }
  }
});
