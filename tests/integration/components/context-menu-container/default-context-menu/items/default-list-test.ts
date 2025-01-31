import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module(
  'Integration | Component | context-menu-container/default-context-menu/items/default-list',
  function (hooks) {
    setupRenderingTest(hooks);

    test('attributes', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'default',
        title: 'One',
        class: 'cls2',
        submenu: {
          items: [
            {
              id: '11',
              type: 'default',
              title: 'One one',
            },
          ],
        },
      });
      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::DefaultList @item={{this.item}} class="cls1" />`,
      );
      assert.dom('ul').hasClass('cls1');
      assert.dom('ul').hasClass('cls2');
    });

    test('attributes [block]', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'default',
        title: 'One',
        class: 'cls2',
        submenu: {
          items: [
            {
              id: '11',
              type: 'default',
              title: 'One one',
            },
          ],
        },
      });
      await render(hbs`
        <ContextMenuContainer::DefaultContextMenu::Items::DefaultList @item={{this.item}} class="cls1">
          template block text
        </ContextMenuContainer::DefaultContextMenu::Items::DefaultList>
      `);
      assert.dom('ul').hasClass('cls1');
      assert.dom('ul').hasClass('cls2');
    });
  },
);
