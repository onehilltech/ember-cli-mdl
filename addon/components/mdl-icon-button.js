import AbstractButtonComponent from '../-private/components/abstract-button';
import layout from '../templates/components/mdl-icon-button';

const IconButton = AbstractButtonComponent.extend({
  layout,

  classNames: ['mdl-button--icon'],

  classNameBindings: ['mini:mdl-button--mini-icon']
});

IconButton.reopenClass ({
  positionalParams: ['icon']
});

export default IconButton;
