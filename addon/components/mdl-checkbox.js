import Checkbox from '@ember/component/checkbox';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Checkbox.extend (ToggleSupportMixin, {
  classNames: ['mdl-checkbox__input'],

  labelClassName: ['mdl-checkbox__label'],

  wrapperClassNames: ['mdl-checkbox', 'mdl-js-checkbox']
});
