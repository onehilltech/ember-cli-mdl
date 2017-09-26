import Component from '../-private/component';
import BadgeMixin from '../-private/mixins/badge';
import layout from '../templates/components/mdl-icon-badge';

export default Component.extend (BadgeMixin, {
  layout,

  tagName: 'div',

  classNames: ['material-icons', 'mdl-badge--overlap']
});
