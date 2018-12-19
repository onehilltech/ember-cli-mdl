import { alias } from '@ember/object/computed';
import Checkbox from '@ember/component/checkbox';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Checkbox.extend (ToggleSupportMixin, {
  classNames: ['mdl-icon-toggle__input'],

  wrapperClassNames: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],

  labelClassName: ['mdl-icon-toggle__label', 'material-icons'],

  icon: alias ('label')
});
