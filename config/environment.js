/*jshint node:true*/
'use strict';

module.exports = function (environment, appConfig) {
  if (!appConfig.sassOptions)
    appConfig.sassOptions = {};

  if (!appConfig.sassOptions.includePaths)
    appConfig.sassOptions.includePaths = [];

  appConfig.sassOptions.includePaths = appConfig.sassOptions.includePaths.concat ([
    'bower_components/material-design-lite/src',
    'app/styles'
  ]);

  return appConfig;
};
