import { isNone } from '@ember/utils';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';

import TooltipSupport from './tooltip-support';
import LayoutSupport from './layout-support';

export default Mixin.create (LayoutSupport, TooltipSupport, {
  mdl: service (),

  concatenatedProperties: ['wrapperClassNames', 'labelClassName'],

  didInsertElement () {
    this._super (...arguments);

    let wrapperId = this.get ('wrapperId');
    this.$ ().wrap (`<label id="${wrapperId}" class="${this.get ('wrapperClassNames').join (' ')}" for="${this.elementId}"></label>`);
    let $wrapper = this.$().parent ();

    // Insert the radio label after the input tag (i.e., this element).
    let $label = $(`<span class="${this.get ('labelClassName').join (' ')}"></span>`);
    $label.insertAfter (this.$());

    this.setProperties ({$wrapper: $wrapper, $label: $label});

    this._setLabel ();
    this._applyRippleEffect ();

    this.get ('mdl').upgradeElement ($wrapper[0]);
  },

  willDestroyElement () {
    this._super (...arguments);
    let {$wrapper, $label} = this.getProperties ('$wrapper', '$label');

    // Downgrade the wrapper element, and delete the label element.
    this.get ('mdl').downgradeElements ($wrapper[0]);
    $label.remove ();

    // Last, unwrap the current element.
    this.$().unwrap ();
  },

  layoutElementId: readOnly ('wrapperId'),

  tooltipElementId: readOnly ('wrapperId'),

  wrapperId: computed (function () {
    return `toggle-wrapper__${this.elementId}`;
  }),

  didUpdate () {
    this._super (...arguments);

    this._setLabel ();
    this._applyRippleEffect ();
  },

  _setLabel () {
    let label = this.get ('label');

    if (isNone (label)) {
      label = '';
    }

    this.$label.text (label);
  },

  _applyRippleEffect () {
    this.$wrapper.toggleClass ('mdl-js-ripple-effect', this.getWithDefault ('rippleEffect'));
  }
});