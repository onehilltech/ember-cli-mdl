import LinkComponent from '../-private/link-component';
import BadgeMixin from '../-private/mixins/badge-mixin';
import layout from '../templates/components/mdl-link-badge';

export default LinkComponent.extend (BadgeMixin, {
  layout,
  tagName: 'a'
});
