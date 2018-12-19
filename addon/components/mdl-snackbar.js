import { isNone } from '@ember/utils';
import Component from '../-private/component';

import layout from '../templates/components/mdl-snackbar';

export default Component.extend({
  layout,

  classNames: ['mdl-js-snackbar', 'mdl-snackbar'],

  didRender () {
    this._super (...arguments);

    let {
      message,
      actionText,
      timeout,
      action
    } = this.getProperties (['message', 'action', 'actionText', 'timeout']);

    if (isNone (message)) {
      return;
    }

    this.element.MaterialSnackbar.showSnackbar ({message, actionHandler: action, actionText, timeout });
    this.set ('message');
  }
});
