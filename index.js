'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    'ember-cli-babel': { enableTypeScriptTransform: true },
  },

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/ember-bootstrap-context-menu/carets.css');
  },
};
