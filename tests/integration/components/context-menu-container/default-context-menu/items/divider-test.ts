import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

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
      assert.dom('li').hasClass('cls1');
      assert.dom('li').hasClass('cls2');
    });
  },
);
