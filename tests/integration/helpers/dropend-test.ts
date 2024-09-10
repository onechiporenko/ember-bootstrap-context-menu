import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dropend', function (hooks) {
  setupRenderingTest(hooks);

  test('`true` when has submenu and position `end`', async function (assert) {
    this.set('item', {
      submenu: {
        items: [1, 2, 3, 4],
        position: 'end',
      },
    });

    await render(hbs`{{dropend this.item}}`);
    assert.dom().hasText('true');
  });

  test('`true` when has submenu and position undefined', async function (assert) {
    this.set('item', {
      submenu: {
        items: [1, 2, 3, 4],
      },
    });

    await render(hbs`{{dropend this.item}}`);
    assert.dom().hasText('true');
  });

  test('`false` when has no submenu', async function (assert) {
    this.set('item', {});

    await render(hbs`{{dropend this.item}}`);
    assert.dom().hasText('false');
  });

  test('`false` when submenu has no items', async function (assert) {
    this.set('item', {
      submenu: {
        items: [],
        position: 'end',
      },
    });

    await render(hbs`{{dropend this.item}}`);
    assert.dom().hasText('false');
  });

  test('`false` when submenu position is not `end` or `undefined`', async function (assert) {
    this.set('item', {
      submenu: {
        items: [1, 2, 3, 4],
        position: 'start',
      },
    });

    await render(hbs`{{dropend this.item}}`);
    assert.dom().hasText('false');
  });
});
