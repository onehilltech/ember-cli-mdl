import $ from 'jquery';
import Service from '@ember/service';

export default Service.extend({
  init () {
    this._super (...arguments);

    $(window).on ('resize', this.didResize.bind (this));
  },

  upgradeElement (el) {
    window.componentHandler.upgradeElement (el);
  },

  downgradeElements (el) {
    window.componentHandler.downgradeElements (el);
  },

  didResize () {
    let width = $(window).width ();
  }
});
