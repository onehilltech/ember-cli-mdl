import { isPresent } from '@ember/utils';
import Component from '@ember/component';

import layout from '../templates/components/mdl-table-header';

export default Component.extend({
  layout,

  tagName: 'th',

  classNameBindings: [
    'numeric::mdl-data-table__cell--non-numeric',
    'sortedClassName'
  ],

  didReceiveAttrs () {
    this._super (...arguments);

    let sorted = this.get ('sorted');
    let sortedClassName = isPresent (sorted) ? `mdl-data-table__header--sorted-${sorted}` : null;
    this.set ('sortedClassName', sortedClassName);
  }
});
