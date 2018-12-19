import { alias } from '@ember/object/computed';
import Checkbox from '@ember/component/checkbox';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Checkbox.extend (ToggleSupportMixin, {
  classNames: ['mdl-switch__input'],

  wrapperClassNames: ['mdl-switch', 'mdl-js-switch'],

  labelClassName: ['mdl-switch__label'],

  icon: alias ('label')
});
