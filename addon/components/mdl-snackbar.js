import Ember from 'ember';
import Component from '../-private/component';

import layout from '../templates/components/mdl-snackbar';

export default Component.extend({
  layout,

  classNames: ['mdl-js-snackbar', 'mdl-snackbar'],

  didUpdate () {
    this._super (...arguments);

    let message = this.get ('message');
    if (Ember.isNone (message)) { return; }

    let data = {
      message: message,
      actionHandler: this.get ('action'),
      actionText: this.get ('actionText'),
      timeout: this.get ('timeout')
    };

    this.element.MaterialSnackbar.showSnackbar (data);

    this.set ('message');
  }
});
