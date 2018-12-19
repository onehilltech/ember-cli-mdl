import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import $ from 'jquery';
import LayoutHeaderRowComponent from './mdl-layout-header-row';

import layout from '../templates/components/mdl-toolbar';

export default LayoutHeaderRowComponent.extend({
  layout,

  classNames: ['mdl-toolbar'],

  didRender () {
    this._super (...arguments);

    // Insert the navigate up icon, if present.
    let navigateUpTo = this.get ('navigateUpTo');

    if (navigateUpTo) {
      if (!this.$navigateUpTo) {
        let $navigateUpTo = $('<div class="mdl-layout-icon"><i class="material-icons">arrow_back</i></div>');

        $navigateUpTo.insertBefore (this.$());
        $navigateUpTo.on ('click', this.navigateUp.bind (this));

        this.$navigateUpTo = $navigateUpTo;
      }
    }
    else if (this.$navigateUpTo) {
      this.$navigateUpTo.remove ();
      this.$navigateUpTo = null;
    }
  },

  willDestroyElement () {
    this._super (...arguments);

    if (this.$navigateUpTo)
      this.$navigateUpTo.remove ();
  },

  navigateUp () {
    let router = this.get ('router');

    let args = [this.get ('navigateUpTo')];
    let navigateUpToData = this.get ('navigateUpToData');

    if (navigateUpToData)
      args.push (navigateUpToData);

    router.replaceWith.apply (router, args);
  },

  router: computed (function() {
    return getOwner (this).lookup ('router:main');
  }).readOnly ()
});
