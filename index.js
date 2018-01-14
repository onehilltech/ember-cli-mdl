/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-mdl',

  included: function (app) {
    this._super.included.apply (this, arguments);

    // material-design-icons
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.eot', {destDir: 'assets/fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.tff', {destDir: 'assets/fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff', {destDir: 'assets/fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff2', {destDir: 'assets/fonts/material-design-icons'});

    // Only import the JavaScript file for material-design-lite since we
    // build the stylesheets on-demand. This allows users to customize
    // variables, such as colors, at build time.

    app.import ({
      development: app.bowerDirectory + '/material-design-lite/material.js',
      production:  app.bowerDirectory + '/material-design-lite/material.min.js'
    });

    app.import (app.bowerDirectory + '/material-design-lite/src/images/tick.svg', {destDir: '/assets/images'});
    app.import (app.bowerDirectory + '/material-design-lite/src/images/tick-mask.svg', {destDir: '/assets/images'});
    app.import (app.bowerDirectory + '/material-design-lite/src/images/buffer.svg', {destDir: '/assets/images'});

    // select component
    app.import (app.bowerDirectory + '/mdl-select-component/mdl-selectfield.min.css');
    app.import (app.bowerDirectory + '/mdl-select-component/mdl-selectfield.min.js');

    // initial.js
    app.import (app.bowerDirectory + '/initial.js/dist/initial.min.js');

    // dialog polyfill
    app.import (app.bowerDirectory + '/dialog-polyfill/dialog-polyfill.js');
    app.import (app.bowerDirectory + '/dialog-polyfill/dialog-polyfill.css');
  },

  contentFor (type, config) {
    if (type === 'head') {
     if (config.materialize && config.materialize.themeColor) {
       let themeColor = config.materialize.themeColor;

       return `<meta name="theme-color" content="${themeColor}">
               <meta name="msapplication-navbutton-color" content="${themeColor}">
               <meta name="apple-mobile-web-app-status-bar-style" content="${themeColor}">`;
      }
    }

    if (type === 'head-footer') {
      let materialize = config.materialize;
      let embedFonts = materialize && materialize.embedIconFonts;

      if (!embedFonts) {
        this.ui.writeLine ('Linking materialize icon fonts');
        return '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />';
      }
      else {
        this.ui.writeLine ('Embedding materialize icon fonts');
      }
    }
  }
};
