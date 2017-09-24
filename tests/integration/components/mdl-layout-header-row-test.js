import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-layout-header-row', 'Integration | Component | mdl layout header row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-layout-header-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-layout-header-row}}
      template block text
    {{/mdl-layout-header-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
