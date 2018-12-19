import Component from '@ember/component';
import layout from '../templates/components/mdl-initial';

export default Component.extend({
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
