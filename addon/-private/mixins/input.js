import { run } from '@ember/runloop';
import Mixin from '@ember/object/mixin';

import TooltipSupport from './tooltip-support';
import LayoutSupport from './layout-support';

export default Mixin.create (LayoutSupport, TooltipSupport, {
  classNames: ['mdl-input'],

  didInsertElement () {
    this._super (...arguments);

    this.$ ().on ('blur', this._onBlur.bind (this));
  },

  _onBlur () {
    let $wrapper = this.get ('$wrapper');

    let isDirty = $wrapper.hasClass ('is-dirty') || this.get ('isDirty');
    let isInvalid = $wrapper.hasClass ('is-invalid');

    if (isDirty || isInvalid) {
      // Reset the custom error message.
      this.set ('errorMessage');

      // Validate the input.
      run (function () {
        this.validateInput ();
      }.bind (this));
    }
  },

  validateInput () {

  }
});
