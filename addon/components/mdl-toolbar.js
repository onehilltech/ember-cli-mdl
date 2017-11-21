import Ember from 'ember';
import LayoutHeaderRowComponent from './mdl-layout-header-row';

import layout from '../templates/components/mdl-toolbar';

export default LayoutHeaderRowComponent.extend({
  layout,

  classNames: ['mdl-toolbar'],

  didInsertElement () {
    this._super (...arguments);

    // Insert the navigate up icon, if present.
    let navigateUpTo = this.get ('navigateUpTo');

    if (navigateUpTo) {
      let $navigateUpTo = Ember.$('<div class="mdl-layout-icon"><i class="material-icons">arrow_back</i></div>');

      $navigateUpTo.insertBefore (this.$());
      $navigateUpTo.on ('click', this.navigateUp.bind (this));

      this.set ('$navigateUp', $navigateUpTo);
    }
  },

  willDestroyElement () {
    this._super (...arguments);

    // Remove the navigate up icon, if present.
    let $navigateUpTo = this.get ('$navigateUpTo');

    if ($navigateUpTo)
      $navigateUpTo.remove ();
  },

  navigateUp () {
    let router = this.get ('router');

    let args = [this.get ('navigateUpTo')];
    let navigateUpToData = this.get ('navigateUpToData');

    if (navigateUpToData)
      args.push (navigateUpToData);

    router.transitionTo.apply (router, args);
  },

  router: Ember.computed (function() {
    return Ember.getOwner (this).lookup ('router:main');
  }).readOnly ()
});
