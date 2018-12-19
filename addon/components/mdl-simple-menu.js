import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/mdl-simple-menu';

export default Component.extend({
  layout,

  classNames: ['mdl-menu__simple'],

  menuIcon: 'more_vert',

  menuId: computed (function () {
    return `mdl-simple-menu__${this.elementId}`;
  })
});
