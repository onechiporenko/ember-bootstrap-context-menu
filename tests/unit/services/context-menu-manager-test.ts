import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | context-menu-manager', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:context-menu-manager');
    assert.ok(service);
  });
});
