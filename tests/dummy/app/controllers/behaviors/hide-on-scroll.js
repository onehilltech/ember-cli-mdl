import { A } from '@ember/array';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  preferences: computed (function () {
    let values = [];

    for (let i = 1; i <= 20; ++ i) {
      values.push ({ title: `Preference ${i}`, subtitle: `Subtitle ${i}`});
    }

    return A (values);
  })
});
