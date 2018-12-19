import { getOwner } from '@ember/application';
import $ from 'jquery';
import { on } from '@ember/object/evented';
import { dasherize } from '@ember/string';
import { computed } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend ({
  classNameForRoute: computed ('routeName', function () {
    let className = dasherize (this.get ('routeName')).replace (/[.]/g, '-');
    return `mdl-route__${className}`;
  }),

  addClass: on ('activate', function () {
    // Add the class name for this route so we can add styles.
    let classNameForRoute = this.get ('classNameForRoute');
    $('body').addClass (classNameForRoute);
  }),

  removeClass: on ('deactivate', function () {
    // Remove the class name for this route so we can remove styles.
    let classNameForRoute = this.get ('classNameForRoute');
    $('body').removeClass (classNameForRoute);
  }),

  /**
   * Handle the transition event. We are mainly concerned with the route showing
   * a dialog and the user pressing the back button. If a dialog is showing, then
   * we need to hide the dialog and prevent the transition.
   *
   * @param transition
   */
  forceHideDialog: on ('willTransition', function (transition) {
    let classNameForRoute = this.get ('classNameForRoute');
    let $dialogs = $ (`.${classNameForRoute}`).find ('.mdl-dialog');
    let views = getOwner (this).lookup ('-view-registry:main');

    $dialogs.each ((i, dialog) => {
      let mdlDialog = views[dialog.id];
      let showing = mdlDialog.get ('show');

      if (showing) {
        // Hide the dialog and abort the transition.
        mdlDialog.set ('show', false);
        transition.abort ();

        if (window.history) {
          window.history.forward ();
        }
      }
    });
  })
});
