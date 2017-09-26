import Ember from 'ember';
import Component from '../-private/component';

import layout from '../templates/components/mdl-card';

export default Component.extend({
  layout,

  classNames: ['mdl-card'],

  classNameBindings: ['shadowClassName'],

  shadowClassName: Ember.computed ('shadow', function () {
    return `mdl-shadow--${this.get ('shadow')}dp`;
  })
});
