import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dropstart', function (hooks) {
  setupRenderingTest(hooks);

  test('`true` when has submenu and position `start`', async function (assert) {
    this.set('item', {
      submenu: {
        items: [1, 2, 3, 4],
        position: 'start',
      },
    });

    await render(hbs`{{dropstart this.item}}`);
    assert.dom().hasText('true');
  });

  test('`false` when has no submenu`', async function (assert) {
    this.set('item', {
      submenu: {
        position: 'start',
      },
    });

    await render(hbs`{{dropstart this.item}}`);
    assert.dom().hasText('false');
  });

  test('`false` when has submenu and position is not `start`', async function (assert) {
    this.set('item', {
      submenu: {
        items: [1, 2, 3, 4],
        position: 'end',
      },
    });

    await render(hbs`{{dropstart this.item}}`);
    assert.dom().hasText('false');
  });

  test('`false` when has submenu and position is undefined', async function (assert) {
    this.set('item', {
      submenu: {
        items: [1, 2, 3, 4],
      },
    });

    await render(hbs`{{dropstart this.item}}`);
    assert.dom().hasText('false');
  });
});
