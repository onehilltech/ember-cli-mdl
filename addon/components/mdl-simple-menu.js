import Ember from 'ember';
import Component from '@ember/component';
import layout from '../templates/components/mdl-simple-menu';

export default Component.extend({
  layout,

  classNames: ['mdl-menu__simple'],

  menuIcon: 'more_vert',

  menuId: Ember.computed (function () {
    return `mdl-simple-menu__${this.elementId}`;
  })
});
