import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('layout', function() {
    this.route('tabs');
    this.route('layout');
  });
  this.route('badges');
  this.route('buttons');
  this.route('cards');
  this.route('lists');
});

export default Router;
