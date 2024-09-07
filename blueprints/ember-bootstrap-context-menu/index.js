/* eslint-env node */

module.exports = {
  name: 'ember-bootstrap-context-menu',
  description: 'Configure ember-bootstrap-context-menu',

  normalizeEntityName: function () {
    // do nothing
  },

  afterInstall() {
    return this.addEmberBootstrap();
  },

  addEmberBootstrap() {
    if (!('ember-bootstrap' in this.project.dependencies())) {
      return this.addAddonToProject('ember-bootstrap');
    }
  },
};
