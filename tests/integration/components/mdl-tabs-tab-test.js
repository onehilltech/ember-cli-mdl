import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-tabs-tab', 'Integration | Component | mdl tabs tab', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-tabs-tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-tabs-tab}}
      template block text
    {{/mdl-tabs-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
