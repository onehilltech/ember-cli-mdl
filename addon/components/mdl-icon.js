import Ember from 'ember';
import layout from '../templates/components/mdl-icon';

const Icon = Ember.Component.extend({
  layout,

  tagName: 'i',

  classNames: ['material-icons']
});

Icon.reopenClass ({
  positionalParams: ['icon']
});

export default Icon;
