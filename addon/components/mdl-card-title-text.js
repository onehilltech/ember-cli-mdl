import Component from '../-private/component';
import layout from '../templates/components/mdl-card-title-text';

export default Component.extend({
  layout,

  tagName: 'h2',

  classNames: ['mdl-card__title-text']
});
