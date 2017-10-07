import Component from '../-private/component';
import Ember from 'ember';

import layout from '../templates/components/mdl-dialog';

export default Component.extend({
  layout,

  tagName: 'dialog',

  classNames: ['mdl-dialog'],

  positiveText: 'Yes',

  neutralText: 'Maybe',

  negativeText: 'No',

  hasPositiveButton: Ember.computed.or ('positiveClick', 'showPositiveButton'),
  hasNeutralButton: Ember.computed.or ('neutralClick', 'showNeutralButton'),
  hasNegativeButton: Ember.computed.or ('negativeClick', 'showNegativeButton'),
  hasButtons: Ember.computed.or ('hasNegativeButton', 'hasPositiveButton', 'hasNeutralButton'),

  didInsertElement () {
    this._super (...arguments);

    let $buttons = this.$('.mdl-dialog-button');
    $buttons.on ('click', this.onButtonClick.bind (this));
  },

  didUpdate () {
    this._super (...arguments);

    let show = this.get ('show');

    if (show) {
      this.element.showModal ();
    }
    else {
      this.element.close ();
    }
  },

  onButtonClick (ev) {
    let $target = Ember.$(ev.target);
    let result = true;

    if ($target.hasClass ('positive')) {
      let positiveClick = this.get ('positiveClick');

      if (positiveClick) {
        result = positiveClick ();
      }
    }
    else if ($target.hasClass ('negative')) {
      let negativeClick = this.get ('negativeClick');

      if (negativeClick) {
        result = negativeClick ();
      }
    }
    else if ($target.hasClass ('neutral')) {
      let neutralClick = this.get ('neutralClick');

      if (neutralClick) {
        result = neutralClick ();
      }
    }
    else {
      // We need to throw an error here.
    }

    this._handleResult (result);
  },

  _handleResult (result) {
    if (result === undefined || result === null) {
      // The user did not pass back a value. If the return value is undefined,
      // then it is assumed the user wants the dialog to close.
      this.set ('show', false);
    }
    else if ((result instanceof Ember.RSVP.Promise)) {
      result.then (this._handleResult.bind (this));
    }
    else if (result === true) {
      this.set ('show', false);
    }
  }
});
