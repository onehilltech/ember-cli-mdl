import { A } from '@ember/array';
import Controller from '@ember/controller';

export default Controller.extend({
  options: [
    {value: 'indiana', label: 'Indiana'},
    {value: 'tennessee', label: 'Tennessee'},
    {value: 'ohio', label: 'Ohio'},
    {value: 'iowa', label: 'Iowa'}
  ],

  init () {
    this._super (...arguments);
    this.set ('value', A (['ohio']));
  }
});
