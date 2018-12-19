import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    agree () {
      return true;
    },

    showConfirmDialog () {
      this.set ('confirm', true);
    }
  }
});
