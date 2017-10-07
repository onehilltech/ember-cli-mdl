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
    let dismiss = true;

    if ($target.hasClass ('positive')) {
      let positiveClick = this.get ('positiveClick');

      if (positiveClick) {
        dismiss = positiveClick ();
      }
    }
    else if ($target.hasClass ('negative')) {
      let negativeClick = this.get ('negativeClick');

      if (negativeClick) {
        dismiss = negativeClick ();
      }
    }
    else if ($target.hasClass ('neutral')) {
      let neutralClick = this.get ('neutralClick');

      if (neutralClick) {
        dismiss = neutralClick ();
      }
    }
    else {
      // We need to throw an error here.
    }

    this.set ('show', !dismiss);
  }
});
