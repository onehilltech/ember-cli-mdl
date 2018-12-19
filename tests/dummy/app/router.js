import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('layout', function() {
    this.route('tabs');
    this.route('layout');
    this.route('toolbar');
    this.route('span');
    this.route('div');
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

  this.route('behaviors', function() {
    this.route('hide-on-scroll');
  });
  this.route('menus');
  this.route('tables');
  this.route('example');
  this.route('slider');
  this.route('sliders');
  this.route('single-choice');
  this.route('multiple-choice');

  this.route('selectfield');
});

export default Router;
