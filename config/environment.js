/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    sassOptions: {
      includePaths: [
        'bower_components/material-design-lite/src',
        'app/styles'
      ]
    }
  };
};
