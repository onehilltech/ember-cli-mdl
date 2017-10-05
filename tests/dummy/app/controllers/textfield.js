import Ember from 'ember';

export default Ember.Controller.extend({
  customError: {
    valueMissing: 'You are missing a value!'
  },

  title: Ember.computed ('search', function () {
    let search = this.get ('search');

    return Ember.isEmpty (search) ? 'Find a church' : null;
  })
});
