import { A } from '@ember/array';
import { isEmpty, isNone } from '@ember/utils';
import Component from '@ember/component';
import layout from '../templates/components/mdl-multiple-choice';

export default Component.extend({
  layout,

  classNames: ['mdl-multiple-choice'],

  didRender () {
    this._super (...arguments);

    // Let's initialize the check list.
    let value = this.get ('value');

    if (isEmpty (value)) {
      return;
    }

    let options = A (this.get ('options'));

    value.forEach (value => {
      // Locate the options that matches the value.

      options.forEach ((option, index) => {
        if (option.value === value) {
          let $checkbox = this.$(`.mdl-checkbox:nth-child(${index + 1})`);

          if (!$checkbox.hasClass ('is-checked')) {
            $checkbox.addClass ('is-checked');
            $checkbox.find ('input[type="checkbox"]').prop ('checked', true);
          }
        }
      });
    });
  },

  actions: {
    selected (index) {
      let {options, value} = this.getProperties (['options', 'value']);

      if (isNone (value)) {
        return;
      }

      let option = options[index];
      let $checkbox = this.$(`.mdl-checkbox:nth-child(${index + 1})`);

      if ($checkbox.hasClass ('is-checked')) {
        value.removeObject (option.value);
      }
      else {
        value.addObject (option.value);
      }
    }
  }
});
