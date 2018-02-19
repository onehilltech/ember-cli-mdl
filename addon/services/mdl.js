import Ember from 'ember';

export default Ember.Service.extend({
  init () {
    this._super (...arguments);

    Ember.$(window).on ('resize', this.didResize.bind (this));
  },

  upgradeElement (el) {
    window.componentHandler.upgradeElement (el);
  },

  downgradeElements (el) {
    window.componentHandler.downgradeElements (el);
  },

  didResize () {
    let width = Ember.$(window).width ();
  }
});
