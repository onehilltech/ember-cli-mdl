/* global dialogPolyfill */

import Component from '../-private/component';
import Ember from 'ember';

import layout from '../templates/components/mdl-dialog';

export default Component.extend({
  layout,

  tagName: 'dialog',

  classNames: ['mdl-dialog'],

  hasPositiveButton: Ember.computed.or ('positive', 'positiveText'),

  hasNeutralButton: Ember.computed.or ('neutral', 'neutralText'),

  hasNegativeButton: Ember.computed.or ('negative', 'negativeText'),

  hasButtons: Ember.computed.or ('hasNegativeButton', 'hasPositiveButton', 'hasNeutralButton'),

  didInsertElement () {
    this._super (...arguments);

    if (!this.element.showModal) {
      dialogPolyfill.registerDialog (this.element);
    }

    let $buttons = this.$('.mdl-dialog-button');
    $buttons.on ('click', this.onButtonClick.bind (this));
  },

  didUpdate () {
    this._super (...arguments);

    let show = this.get ('show');

    if (show) {
      if (!this.element.open) {
        this.element.showModal ();

        // Listen for the ESC button since there is no way to register
        // for when the dialog is closed.
        Ember.$(document).on ('keyup', this._onKeyUp.bind (this));
      }
    }
    else if (this.element.open) {
      this.element.close ();
    }

    if (!show) {
      Ember.$(document).off ('keyup');
    }
  },

  _onKeyUp (ev) {
    if (ev.keyCode === 27) {
      Ember.run (() => {
        this.sendAction ('close');
        this.set ('show', false);
      });
    }
  },

  onButtonClick (ev) {
    let $target = Ember.$(ev.target);
    let result = true;

    if ($target.hasClass ('positive')) {
      this.sendAction ('positive');
    }
    else if ($target.hasClass ('negative')) {
      this.sendAction ('negative');
    }
    else if ($target.hasClass ('neutral')) {
      this.sendAction ('neutral');
    }
    else {
      // We need to throw an error here.
    }

    this._handleResult (result);
  },

  _handleResult (result) {
    if (result === undefined || result === null || result === true) {
      // The user did not pass back a value. If the return value is undefined,
      // then it is assumed the user wants the dialog to close.
      this.sendAction ('close');
      this.set ('show', false);
    }
    else if ((result instanceof Ember.RSVP.Promise)) {
      result.then (this._handleResult.bind (this));
    }
  }
});
