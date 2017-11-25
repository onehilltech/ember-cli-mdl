import Ember from 'ember';

export default Ember.Route.extend ({
  classNameForRoute: Ember.computed ('routeName', function () {
    let className = Ember.String.dasherize (this.get ('routeName')).replace (/[.]/g, '-');
    return `mdl-route__${className}`;
  }),

  addClass: Ember.on ('activate', function () {
    // Add the class name for this route so we can add styles.
    let classNameForRoute = this.get ('classNameForRoute');
    Ember.$('body').addClass (classNameForRoute);
  }),

  removeClass: Ember.on ('deactivate', function () {
    // Remove the class name for this route so we can remove styles.
    let classNameForRoute = this.get ('classNameForRoute');
    Ember.$('body').removeClass (classNameForRoute);
  }),

  /**
   * Handle the transition event. We are mainly concerned with the route showing
   * a dialog and the user pressing the back button. If a dialog is showing, then
   * we need to hide the dialog and prevent the transition.
   *
   * @param transition
   */
  forceHideDialog: Ember.on ('willTransition', function (transition) {
    let classNameForRoute = this.get ('classNameForRoute');
    let $dialogs = Ember.$ (`.${classNameForRoute}`).find ('.mdl-dialog');
    let views = Ember.getOwner (this).lookup ('-view-registry:main');

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
