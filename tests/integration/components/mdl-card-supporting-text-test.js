import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-card-supporting-text', 'Integration | Component | mdl card supporting text', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-card-supporting-text}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-card-supporting-text}}
      template block text
    {{/mdl-card-supporting-text}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
