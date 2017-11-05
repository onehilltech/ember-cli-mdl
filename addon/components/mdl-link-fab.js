import LinkComponent from '../-private/link-component';
import ButtonMixin from '../-private/mixins/button';

export default LinkComponent.extend (ButtonMixin, {
  classNames: ['mdl-button--fab'],

  classNameBindings: [
    'mini:mdl-button--mini-fab'
  ]
});
