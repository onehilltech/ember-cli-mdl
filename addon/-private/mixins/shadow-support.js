import Ember from 'ember';

export default Ember.Mixin.create ({
  classNameBindings: ['shadowClassName'],

  shadowClassName: Ember.computed ('shadow', function () {
    let shadow = this.get ('shadow');
    return Ember.isPresent (shadow) ? `mdl-shadow--${this.get ('shadow')}dp` : null;
  }),

  shadow: 2
})