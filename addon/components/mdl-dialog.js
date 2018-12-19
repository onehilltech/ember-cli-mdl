/* global dialogPolyfill */

import { Promise } from 'rsvp';

import { run } from '@ember/runloop';
import $ from 'jquery';
import { or } from '@ember/object/computed';

import Component from '../-private/component';

import layout from '../templates/components/mdl-dialog';

export default Component.extend({
  layout,

  tagName: 'dialog',

  classNames: ['mdl-dialog'],

  hasPositiveButton: or ('positive', 'positiveText'),

  hasNeutralButton: or ('neutral', 'neutralText'),

  hasNegativeButton: or ('negative', 'negativeText'),

  hasButtons: or ('hasNegativeButton', 'hasPositiveButton', 'hasNeutralButton'),

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
        $(document).on ('keyup', this._onKeyUp.bind (this));
      }
    }
    else if (this.element.open) {
      this.element.close ();
    }

    if (!show) {
      $(document).off ('keyup');
    }
  },

  _onKeyUp (ev) {
    if (ev.keyCode === 27) {
      run (() => {
        this.set ('show', false);
        this.sendAction ('closed');
      });
    }
  },

  onButtonClick (ev) {
    let $target = $(ev.target);
    let result = true;

    if ($target.hasClass ('positive')) {
      let positive = this.get ('positive');

      if (positive) {
        result = positive ();
      }
    }
    else if ($target.hasClass ('negative')) {
      let negativeClick = this.get ('negative');

      if (negativeClick) {
        result = negativeClick ();
      }
    }
    else if ($target.hasClass ('neutral')) {
      let neutralClick = this.get ('neutral');

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
    if ((result instanceof Promise)) {
      result.then (this._handleResult.bind (this));
    }
    else if (result === undefined || result === null || result) {
      // The user did not pass back a value. If the return value is undefined,
      // then it is assumed the user wants the dialog to close.
      this.set ('show', false);
      this.sendAction ('closed');
    }
  }
});
