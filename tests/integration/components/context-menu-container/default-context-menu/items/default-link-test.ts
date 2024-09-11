import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { MenuItem } from 'ember-bootstrap-context-menu/types/menu-item.interface';
import { click } from '@ember/test-helpers';

module(
  'Integration | Component | context-menu-container/default-context-menu/items/default-link',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'default',
        title: 'One',
      });
      this.set('handler', (item: MenuItem) => assert.strictEqual(item.id, '1'));

      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::DefaultLink
          @item={{this.item}}
          @menuItemClicked={{this.handler}}
        />`,
      );
      assert.dom('a').hasText('One');
      await click('a');
    });

    test('attributes', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'default',
        title: 'One',
        class: 'cls2',
      });

      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::DefaultLink
          class="cls1"
          @item={{this.item}}
        />`,
      );
      assert.dom('a').hasClass('cls1');
      assert.dom('a').hasClass('cls2');
    });

    test('it renders [block]', async function (assert) {
      await render(hbs`
      <ContextMenuContainer::DefaultContextMenu::Items::DefaultLink>
        ONEONEONE
      </ContextMenuContainer::DefaultContextMenu::Items::DefaultLink>
    `);
      assert.dom('a').hasText('ONEONEONE');
      await click('a');
    });

    test('disabled', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'default',
        title: 'One',
        disabled: true,
      });
      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::DefaultLink @item={{this.item}} />`,
      );
      assert.dom('a').hasClass('disabled');
    });

    test('disabled [block]', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'default',
        title: 'One',
        disabled: true,
      });
      await render(hbs`
        <ContextMenuContainer::DefaultContextMenu::Items::DefaultLink @item={{this.item}}>
          text
        </ContextMenuContainer::DefaultContextMenu::Items::DefaultLink>`);
      assert.dom('a').hasClass('disabled');
    });
  },
);
