import Component from '../-private/component';
import layout from '../templates/components/mdl-card-actions';

export default Component.extend({
  layout,

  classNames: ['mdl-card__actions'],
  classNameBindings: ['border:mdl-card--border']
});
