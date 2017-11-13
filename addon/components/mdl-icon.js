import Component from '../-private/component';

import layout from '../templates/components/mdl-icon';

const Icon = Component.extend ({
  layout,

  tagName: 'i',

  classNames: ['material-icons']
});

Icon.reopenClass ({
  positionalParams: ['icon']
});

export default Icon;
