import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create ({
  classNameBindings: ['shadowClassName'],

  shadowClassName: computed ('shadow', function () {
    let shadow = this.get ('shadow');
    return isPresent (shadow) ? `mdl-shadow--${this.get ('shadow')}dp` : null;
  }),

  shadow: 2
})