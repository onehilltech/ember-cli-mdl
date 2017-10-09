import Component from '../-private/component';
import layout from '../templates/components/mdl-spinner';

export default Component.extend({
  layout,

  classNames: ['mdl-spinner', 'mdl-js-spinner'],

  classNameBindings: [
    'singleColor:mdl-spinner--single-color',
    'isActive'
  ]
});
