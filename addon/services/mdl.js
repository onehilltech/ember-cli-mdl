import Ember from 'ember';

export default Ember.Service.extend({
  upgradeElement (el) {
    window.componentHandler.upgradeElement (el);
  }
});
