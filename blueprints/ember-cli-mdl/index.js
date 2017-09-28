/* eslint-env node */
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addBowerPackagesToProject ([
      {name: 'material-design-lite', target: '^1.3.0'},
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
