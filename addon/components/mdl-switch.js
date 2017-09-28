import Ember from 'ember';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Ember.Checkbox.extend (ToggleSupportMixin, {
  classNames: ['mdl-switch__input'],

  wrapperClassNames: ['mdl-switch', 'mdl-js-switch'],

  labelClassName: ['mdl-switch__label'],

  icon: Ember.computed.alias ('label')
});
