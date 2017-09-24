import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-navigation-link', 'Integration | Component | mdl navigation link', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-navigation-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-navigation-link}}
      template block text
    {{/mdl-navigation-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
