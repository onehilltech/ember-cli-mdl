/* eslint-env node */
module.exports = {
  description: '',

  afterInstall () {
    return this.addBowerPackagesToProject ([
      {name: 'material-design-light', target: '^1.3.0'},
      {name: 'material-design-icons', target: '^3.0.1'}
    ]).then (() => {
      return this.addAddonsToProject({
        packages: [
          {name: 'ember-cli-sass'}
        ]
      })
    })
  }
};
