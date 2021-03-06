import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '../-private/component';
import layout from '../templates/components/mdl-list-item';

const linesClassNames = [null, null, 'mdl-list__item--two-line', 'mdl-list__item--three-line'];

export default Component.extend({
  layout,

  tagName: 'li',

  classNames: ['mdl-list__item'],

  router: service (),

  classNameBindings: [
    'border:mdl-list__item--border',
    'linesClassName'
  ],

  linesClassName: computed ('lines', function () {
    let lines = this.getWithDefault ('lines', 1);
    return linesClassNames[lines];
  })
});
