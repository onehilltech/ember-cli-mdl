import Ember from 'ember';

export default Ember.Route.extend ({
  classNameForRoute: Ember.computed ('routeName', function () {
    let className = this.get ('routeName').dasherize ().replace ('\\.', '-');
    return `mdl-route__${className}`;
  }),

  activate () {
    this._super (...arguments);

    Ember.$('body').addClass (this.get ('classNameForRoute'));
  },

  deactivate () {
    this._super (...arguments);

    Ember.$('body').removeClass (this.get ('classNameForRoute'));

  }
})