import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | hover-bridge', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:hover-bridge');
    assert.ok(service);
  });
});
