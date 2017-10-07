import Ember from 'ember';
import layout from '../templates/components/mdl-dialog-title';

export default Ember.Component.extend({
  layout,

  tagName: 'h4',

  classNames: ['mdl-dialog__title']
});
