import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  customError: {
    valueMissing: 'You are missing a value!'
  },

  title: computed ('search', function () {
    let search = this.get ('search');

    return isEmpty (search) ? 'Find a church' : null;
  })
});
