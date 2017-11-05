import Component from '../component';
import ButtonMixin from '../mixins/button';

import layout from '../../templates/components/mdl-button';

/**
 * @class AbstractButton
 *
 * Base class for all buttons.
 */
export default Component.extend (ButtonMixin, {
  layout
});
