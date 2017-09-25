import Component from '../-private/component';
import layout from '../templates/components/mdl-badge';

export default Component.extend({
  layout,

  classNames: ['mdl-badge'],

  classNameBindings: ['overlap:mdl-badge--overlap', 'background::mdl-badge--no-background'],

  attributeBindings: ['value:data-badge'],

  background: true
});
