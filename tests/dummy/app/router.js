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
    this.route('toolbar');
  });
  this.route('badges');
  this.route('buttons');
  this.route('cards');
  this.route('lists');
  this.route('textfield');
  this.route('toggles');
  this.route('dialog');

  this.route('loading', function() {
    this.route('progress');
    this.route('spinner');
  });
  this.route('snackbar');
  this.route('initial');
});

export default Router;
