import Ember from 'ember';
import ToggleSupportMixin from '../-private/mixins/toggle-support';

export default Ember.Checkbox.extend (ToggleSupportMixin, {
  classNames: ['mdl-icon-toggle__input'],

  wrapperClassNames: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],

  labelClassName: ['mdl-icon-toggle__label', 'material-icons'],

  icon: Ember.computed.alias ('label')
});
