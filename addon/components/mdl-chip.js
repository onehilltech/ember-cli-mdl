import Component from '@ember/component';
import layout from '../templates/components/mdl-chip';

export default Component.extend({
  layout,

  tagName: 'span',

  classNames: ['mdl-chip'],

  classNameBindings: [
    'deletable:mdl-chip--deletable',
    'contact:mdl-chip--contact'
  ],

  deleteIcon: 'cancel',

  actions: {
    delete () {
      this.sendAction ("delete");
    }
  }
});
