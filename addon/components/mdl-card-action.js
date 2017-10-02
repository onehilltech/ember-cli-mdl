import Component from '../-private/component';
import layout from '../templates/components/mdl-card-action';
import ButtonMixin from '../-private/mixins/button';

export default Component.extend (ButtonMixin, {
  layout,

  tagName: 'a'
});
