import Ember from 'ember';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Ember.Checkbox.extend (ToggleSupportMixin, {
  classNames: ['mdl-checkbox__input'],

  labelClassName: ['mdl-checkbox__label'],

  wrapperClassNames: ['mdl-checkbox', 'mdl-js-checkbox']
});
