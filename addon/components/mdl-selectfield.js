import Ember from 'ember';
import TooltipSupport from '../-private/mixins/tooltip-support';
import LayoutSupport from '../-private/mixins/layout-support';

import layout from '../templates/components/mdl-selectfield';

export default Ember.Component.extend (LayoutSupport, TooltipSupport, {
  layout,

  mdl: Ember.inject.service (),

  tagName: 'select',

  classNames: ['mdl-selectfield__select'],

  wrapperId: Ember.computed (function () {
    return this.$wrapper[0].id;
  }).readOnly (),

  layoutElementId: Ember.computed ('wrapperId'),

  tooltipElementId: Ember.computed.readOnly ('wrapperId'),

  didInsertElement () {
    this._super (...arguments);

    // Add the wrapper class
    this.$().wrap ('<div class="mdl-selectfield mdl-js-selectfield"></div>');
    let $wrapper = this.$().parent ();

    $wrapper.toggleClass ('mdl-selectfield--floating-label', this.getWithDefault ('floatingLabel', false));

    // Insert the label and error tags.
    let $label = Ember.$(`<label class="mdl-selectfield__label" for="${this.elementId}">${this.get ('label')}</label>`);
    $label.insertAfter (this.$());

    let $error = Ember.$('<span class="mdl-selectfield__error"></span>');
    $error.insertAfter ($label);

    this.setProperties ({ $wrapper: $wrapper, $label: $label, $error: $error });
    this._toggleWrapperClassNames ();

    this.get ('mdl').upgradeElement ($wrapper[0]);
  },

  didUpdate () {
    this._super (...arguments);
    this._toggleWrapperClassNames ();
  },

  _toggleWrapperClassNames () {
    let $wrapper = this.get ('$wrapper');

    $wrapper.toggleClass ('mdl-selectfield--full-width', this.getWithDefault ('fullWidth', false));
  },

  willDestroyElement () {
    this._super (...arguments);

    let { $label, $error } = this.getProperties ('$wrapper', '$label', '$error');

    // Downgrade the element.
    //this.get ('mdl').downgradeElements ($wrapper[0]);

    // Remove the other siblings.
    this.$ ().siblings ('.mdl-selectfield__box, .mdl-selectfield__list-option-box').remove ();

    // Remove the error and label elements.
    $error.remove ();
    $label.remove ();

    // Unwrap the original element.
    this.$().unwrap ();

    this.setProperties ({ $wrapper: null, $label: null, $error: null });
  }
});
