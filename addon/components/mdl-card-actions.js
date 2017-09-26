import Component from '../-private/component';
import CardBorderMixin from '../-private/mixins/card-border';

import layout from '../templates/components/mdl-card-actions';

export default Component.extend (CardBorderMixin, {
  layout,

  classNames: ['mdl-card__actions'],
});
