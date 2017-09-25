import Ember from 'ember';

export default Ember.Mixin.create ({
  classNames: ['mdl-badge'],

  classNameBindings: ['overlap:mdl-badge--overlap', 'background::mdl-badge--no-background'],

  attributeBindings: ['value:data-badge'],

  background: true
});
