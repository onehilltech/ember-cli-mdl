import Component from '../-private/component';
import CardBorderMixin from '../-private/mixins/card-border';

import layout from '../templates/components/mdl-card-title';

export default Component.extend (CardBorderMixin, {
  layout,

  classNames: ['mdl-card__title'],

  classNameBindings: ['expand:mdl-card--expand']
});
