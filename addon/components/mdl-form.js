import { isPresent } from '@ember/utils';
import { getOwner } from '@ember/application';
import Component from '@ember/component';
import layout from '../templates/components/mdl-form';

export default Component.extend({
  layout,

  tagName: 'form',

  classNames: ['mdl-form'],

  didInsertElement () {
    this._super (...arguments);

    this.$ (':submit').click (this._validateThenSubmit.bind (this));
  },

  _validateThenSubmit (event) {
    // Prevent the default validation behavior.
    event.preventDefault ();

    // Manually validate the input.
    let views = getOwner (this).lookup ('-view-registry:main');
    let $inputs = this.$ ('.mdl-input');

    let valid = true;

    for (let i = 0, len = $inputs.length; i < len; ++ i) {
      let $input = $inputs[i];
      let mdlInput = views[$input.id];

      if (isPresent (mdlInput)) {
        mdlInput.validateInput ();
        valid &= mdlInput.element.validity.valid;
      }
    }

    if (valid) {
      let submit = this.get ('submit');

      if (submit)
        submit ();
    }
  }
});
