import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | context-menu-wrapper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);
    this.set('settings', {
      x: 0,
      y: 0,
    });
    await render(hbs`<ContextMenuWrapper @settings={{this.settings}} />`);
  });
});