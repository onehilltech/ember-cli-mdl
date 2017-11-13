import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  preferences: Ember.computed (function () {
    let values = [];

    for (let i = 1; i <= 20; ++ i) {
      values.push ({ title: `Preference ${i}`, subtitle: `Subtitle ${i}`});
    }

    return Ember.A (values);
  })
});
