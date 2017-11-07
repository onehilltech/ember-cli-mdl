import Ember from 'ember';

import LinkComponent from '../-private/link-component';
import ButtonMixin from '../-private/mixins/button';

import layout from '../templates/components/mdl-link-icon-button';

const LinkIconButton = LinkComponent.extend (ButtonMixin, {
  layout,

  tagName: 'a',

  classNames: ['mdl-button--icon'],

  icon: Ember.computed ('params.[]', function () {
    return this.get ('params')[0];
  })
});

LinkIconButton.reopenClass({
  positionalParams: 'params'
});

export default LinkIconButton;
