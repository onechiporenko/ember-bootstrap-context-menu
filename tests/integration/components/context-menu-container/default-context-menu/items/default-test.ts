import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | context-menu-container/default-context-menu/items/default',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::Default />`,
      );

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <ContextMenuContainer::DefaultContextMenu::Items::Default>
        template block text
      </ContextMenuContainer::DefaultContextMenu::Items::Default>
    `);

      assert.dom().hasText('template block text');
    });
  },
);
