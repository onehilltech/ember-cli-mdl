import Component from '../-private/component';
import ShadowSupport from '../-private/mixins/shadow-support';

import layout from '../templates/components/mdl-table';

export default Component.extend (ShadowSupport, {
  layout,

  tagName: 'table',

  classNames: ['mdl-data-table', 'mdl-js-data-table'],

  classNameBindings: ['selectable:mdl-data-table--selectable']
});
