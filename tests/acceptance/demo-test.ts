import { module, test } from 'qunit';
import { triggerEvent, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';

module('Acceptance | demo', function (hooks) {
  setupApplicationTest(hooks);

  test('enabled submenu', async function (assert) {
    await visit('/demo');
    await triggerEvent('#menu-two-levels', 'contextmenu');
    assert.dom('.context-menu-wrapper').exists();
    await triggerEvent(
      '.context-menu-wrapper>.dropdown-menu.show>li:nth-of-type(3)',
      'mouseenter',
    );
    assert
      .dom('.context-menu-wrapper>.dropdown-menu.show>li:nth-of-type(3)>.show')
      .exists();
  });

  test('dinabled submenu', async function (assert) {
    await visit('/demo');
    await triggerEvent('#menu-two-levels', 'contextmenu');
    assert.dom('.context-menu-wrapper').exists();
    assert
      .dom('.context-menu-wrapper>.dropdown-menu.show>li:nth-of-type(4)>a')
      .hasClass('disabled');
    await triggerEvent(
      '.context-menu-wrapper>.dropdown-menu.show>li:nth-of-type(4)',
      'mouseenter',
    );
    assert
      .dom('.context-menu-wrapper>.dropdown-menu.show>li:nth-of-type(4)>.show')
      .doesNotExist();
  });
});
