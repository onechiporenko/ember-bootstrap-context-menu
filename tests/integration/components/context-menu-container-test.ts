import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | context-menu-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ContextMenuContainer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ContextMenuContainer>
        template block text
      </ContextMenuContainer>
    `);

    assert.dom().hasText('template block text');
  });
});
