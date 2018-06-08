import Component from '@ember/component';
import Ember from 'ember';

import layout from '../templates/components/mdl-single-choice';

export default Component.extend({
  layout,

  classNames: ['mdl-single-choice'],

  didRender () {
    this._super (...arguments);

    const {name, value} = this.getProperties (['name', 'value']);

    if (Ember.isPresent (value)) {
      // We need to check the element, and add the correct
      const $radio = Ember.$ (`[name=${name}][value=${value}]`);
      $radio.prop ('checked', true);

      const $parent = $radio.parent ();

      if (!$parent.hasClass ('is-checked')) {
        $parent.addClass ('is-checked');
      }
    }
  }
});
