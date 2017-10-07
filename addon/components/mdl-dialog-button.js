import Ember from 'ember';
import layout from '../templates/components/mdl-dialog-button';

export default Ember.Component.extend({
  layout,

  tagName: 'button',

  classNames: ['mdl-button', 'mdl-dialog-button'],

  didInsertElement () {
    this._super (...arguments);

    this.$().attr ('type', 'button');
  }
});
