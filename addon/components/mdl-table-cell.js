import Component from '@ember/component';
import layout from '../templates/components/mdl-table-cell';

export default Component.extend({
  layout,

  tagName: 'td',

  classNameBindings: ['numeric::mdl-data-table__cell--non-numeric'],

  numeric: false,
});
