import Component from '../-private/component';
import CardBorderMixin from '../-private/mixins/card-border';

import layout from '../templates/components/mdl-card-supporting-text';

export default Component.extend (CardBorderMixin, {
  layout,

  classNames: ['mdl-card__supporting-text']
});
