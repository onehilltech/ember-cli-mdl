import { dasherize } from '@ember/string';
import $ from 'jquery';
import { get } from '@ember/object';
import { on } from '@ember/object/evented';
import Mixin from '@ember/object/mixin';

export default Mixin.create ({
  _applyLayout: on ('didRender', function () {
    let {layoutFor, _oldLayoutFor} = this.getProperties (['layoutFor', '_oldLayoutFor']);

    if (layoutFor === _oldLayoutFor)
      return;

    let layoutElementId = get (this, 'layoutElementId');
    let $layoutElement = $(`#${layoutElementId}`);
    
    if (_oldLayoutFor) {
      // The old layoutFor exists and we need to remove the old layoutFor.
      let layoutForClassName = this._computeLayoutClassName (_oldLayoutFor);
      $layoutElement.removeClass (layoutForClassName);
    }

    let layoutForClassName = this._computeLayoutClassName (layoutFor);
    $layoutElement.addClass (layoutForClassName)
  }),

  _computeLayoutClassName (value) {
    return `mdl-layout--${dasherize (value)}`;
  }
});
