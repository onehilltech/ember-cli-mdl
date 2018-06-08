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
      // It's just simple to uncheck all the items.
      Ember.$ (`[name=${name}]`).parent ().removeClass ('is-checked');

      // Then, check the item that was selected.
      const $radio = Ember.$ (`[name=${name}][value=${value}]`);
      $radio.prop ('checked', true);

      const $parent = $radio.parent ();

      if (!$parent.hasClass ('is-checked')) {
        $parent.addClass ('is-checked');
      }
    }
  }
});
