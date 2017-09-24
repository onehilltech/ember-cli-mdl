import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-navigation', 'Integration | Component | mdl navigation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-navigation}}
      template block text
    {{/mdl-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
