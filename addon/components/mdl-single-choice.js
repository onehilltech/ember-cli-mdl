import $ from 'jquery';
import { isPresent } from '@ember/utils';
import Component from '@ember/component';

import layout from '../templates/components/mdl-single-choice';

export default Component.extend({
  layout,

  classNames: ['mdl-single-choice'],

  didRender () {
    this._super (...arguments);

    const {name, value} = this.getProperties (['name', 'value']);

    if (isPresent (value)) {
      // It's just simple to uncheck all the items.
      $ (`[name=${name}]`).parent ().removeClass ('is-checked');

      // Then, check the item that was selected.
      const $radio = $ (`[name=${name}][value=${value}]`);
      $radio.prop ('checked', true);

      const $parent = $radio.parent ();

      if (!$parent.hasClass ('is-checked')) {
        $parent.addClass ('is-checked');
      }
    }
  }
});
