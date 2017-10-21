import Component from '../-private/component';
import Ember from 'ember';
import layout from '../templates/components/mdl-list-item';

const linesClassNames = [null, null, 'mdl-list__item--two-line', 'mdl-list__item--three-line'];

export default Component.extend({
  layout,

  tagName: 'li',

  classNames: ['mdl-list__item'],

  router: Ember.inject.service (),

  classNameBindings: [
    'border:mdl-list__item--border',
    'linesClassName'
  ],

  linesClassName: Ember.computed ('lines', function () {
    let lines = this.getWithDefault ('lines', 1);
    return linesClassNames[lines];
  })
});
