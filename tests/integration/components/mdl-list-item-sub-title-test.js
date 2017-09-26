import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-list-item-sub-title', 'Integration | Component | mdl list item sub title', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-list-item-sub-title}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-list-item-sub-title}}
      template block text
    {{/mdl-list-item-sub-title}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
