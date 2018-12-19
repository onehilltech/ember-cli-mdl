import $ from 'jquery';
import TextField from '@ember/component/text-field';
import TextSupportMixin from '../-private/mixins/text-support';

export default TextField.extend (TextSupportMixin, {
  didInsertElement () {
    this._super (...arguments);

    if (this.getWithDefault ('expandable', false))
      this._makeExpandable ();
  },

  _makeExpandable () {
    let $wrapper = this.get ('$wrapper');
    $wrapper.addClass ('mdl-textfield--expandable');

    let $expandableHolder = $('<div class="mdl-textfield__expandable-holder"></div>');

    // Move the current children in the $wrapper, and move them to the
    // expandable holder element.
    let $children = $wrapper.children ();
    $children.detach ();

    $expandableHolder.append ($children);

    // Now, add the outer label to the wrapper, and then append the holder
    // to the wrapper.
    let $expandableHolderLabel = $(`<label class="mdl-button mdl-js-button mdl-button--icon" for="${this.elementId}"><i class="material-icons">${this.get ('expandableIcon')}</i></label>`);
    $wrapper.append ($expandableHolderLabel);
    $wrapper.append ($expandableHolder);
  },

  _unmakeExpandable () {

  }
});
