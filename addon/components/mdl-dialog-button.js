import Component from '@ember/component';
import layout from '../templates/components/mdl-dialog-button';

export default Component.extend({
  layout,

  tagName: 'button',

  classNames: ['mdl-button', 'mdl-dialog-button'],

  didInsertElement () {
    this._super (...arguments);

    this.$().attr ('type', 'button');
  }
});
