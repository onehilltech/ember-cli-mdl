import Ember from 'ember';

export default Ember.Mixin.create ({
  _applyLayout: Ember.on ('didRender', function () {
    let {layoutFor, _oldLayoutFor} = this.getProperties (['layoutFor', '_oldLayoutFor']);

    if (layoutFor === _oldLayoutFor)
      return;

    let layoutElementId = Ember.get (this, 'layoutElementId');
    let $layoutElement = Ember.$(`#${layoutElementId}`);
    
    if (_oldLayoutFor) {
      // The old layoutFor exists and we need to remove the old layoutFor.
      let layoutForClassName = this._computeLayoutClassName (_oldLayoutFor);
      $layoutElement.removeClass (layoutForClassName);
    }

    let layoutForClassName = this._computeLayoutClassName (layoutFor);
    $layoutElement.addClass (layoutForClassName)
  }),

  _computeLayoutClassName (value) {
    return `mdl-layout--${Ember.String.dasherize (value)}`;
  }
});
