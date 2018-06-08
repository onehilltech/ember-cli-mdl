import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  options: [
    {value: 'indiana', label: 'Indiana'},
    {value: 'tennessee', label: 'Tennessee'},
    {value: 'ohio', label: 'Ohio'},
    {value: 'iowa', label: 'Iowa'}
  ],

  init () {
    this._super (...arguments);
    this.set ('value', Ember.A (['ohio']));
  }
});
