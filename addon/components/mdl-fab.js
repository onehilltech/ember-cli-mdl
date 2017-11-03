import AbstractButtonComponent from '../-private/components/abstract-button';

export default AbstractButtonComponent.extend({
  classNames: ['mdl-button--fab'],

  classNameBindings: [
    'mini:mdl-button--mini-fab'
  ]
});
