import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | context-menu-container/default-context-menu/items/divider',
  function (hooks) {
    setupRenderingTest(hooks);

    test('attributes', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'divider',
        title: 'One',
        class: 'cls2',
      });
      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::Divider class="cls1" @item={{this.item}} />`,
      );
      assert.ok(this.element.querySelector('li')?.classList.contains('cls1'));
      assert.ok(this.element.querySelector('li')?.classList.contains('cls2'));
    });
  },
);
