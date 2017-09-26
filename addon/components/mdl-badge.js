import Component from '../-private/component';
import BadgeMixin from '../-private/mixins/badge';
import layout from '../templates/components/mdl-badge';

export default Component.extend (BadgeMixin, {
  layout,
  tagName: 'span'
});
