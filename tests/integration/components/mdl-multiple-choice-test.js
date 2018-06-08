import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-multiple-choice', 'Integration | Component | mdl multiple choice', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-multiple-choice}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-multiple-choice}}
      template block text
    {{/mdl-multiple-choice}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
