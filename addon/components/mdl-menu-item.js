import Component from '../-private/component';
import layout from '../templates/components/mdl-menu-item';

export default Component.extend ({
  layout,

  tagName: 'li',

  classNames: ['mdl-menu__item'],

  classNameBindings: ['divider:mdl-menu__item--full-bleed-divider'],

  attributeBindings: ['disabled']
});
