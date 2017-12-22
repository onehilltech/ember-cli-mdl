import Ember from 'ember';
import layout from '../templates/components/mdl-initial';

export default Ember.Component.extend({
  layout,

  tagName: 'img',

  classNames: ['mdl-initial'],

  attributeBindings: ['height', 'width'],

  didRender () {
    this._super (...arguments);

    this.$ ().initial ({
      name: this.get ('name'),
      height: this.get ('height'),
      width: this.get ('width'),
      charCount: this.get ('charCount'),
      textColor: this.get ('textColor'),
      fontSize: this.get ('fontSize'),
      fontWeight: this.get ('fontWeight'),
      radius: this.get ('radius'),
      seed: this.get ('seed'),
      color: this.get ('color')
    });
  }
});
