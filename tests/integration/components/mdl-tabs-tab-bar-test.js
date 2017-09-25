import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-tabs-tab-bar', 'Integration | Component | mdl tabs tab bar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-tabs-tab-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-tabs-tab-bar}}
      template block text
    {{/mdl-tabs-tab-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
