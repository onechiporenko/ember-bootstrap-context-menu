import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | context-menu-container/default-context-menu/items/header',
  function (hooks) {
    setupRenderingTest(hooks);

    test('attributes', async function (assert) {
      this.set('item', {
        id: '1',
        type: 'header',
        title: 'One',
        class: 'cls2',
      });
      await render(
        hbs`<ContextMenuContainer::DefaultContextMenu::Items::Header class="cls1" @item={{this.item}} />`,
      );
      assert.ok(this.element.querySelector('h6')?.classList.contains('cls1'));
      assert.ok(this.element.querySelector('h6')?.classList.contains('cls2'));
    });
  },
);
