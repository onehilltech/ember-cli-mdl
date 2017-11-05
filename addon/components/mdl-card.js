import Component from '../-private/component';
import ShadowSupport from '../-private/mixins/shadow-support';

import layout from '../templates/components/mdl-card';

export default Component.extend (ShadowSupport, {
  layout,

  classNames: ['mdl-card'],
});
