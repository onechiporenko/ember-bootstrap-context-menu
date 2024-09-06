# ember-bootstrap-context-menu

[![CI](https://github.com/onechiporenko/ember-bootstrap-context-menu/actions/workflows/ci.yml/badge.svg)](https://github.com/onechiporenko/ember-bootstrap-context-menu/actions/workflows/ci.yml)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bootstrap-context-menu.svg)](https://emberobserver.com/addons/ember-bootstrap-context-menu)
[![npm version](https://badge.fury.io/js/ember-bootstrap-context-menu.png)](http://badge.fury.io/js/ember-bootstrap-context-menu)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/ember-bootstrap-context-menu.svg)](https://www.npmjs.com/package/ember-bootstrap-context-menu)

`ember-bootstrap-context-menu` is an Ember-addon that provides a simple mechanism for interaction with user using context menu. This addon is based on `ember-bootstrap`.

## Installation

`ember i ember-bootstrap-context-menu`

Add next to your `application.hbs`:

```html
<ContextMenuContainer />
```

Add next to your `app.scss` (see [negative-margin docs](https://getbootstrap.com/docs/5.3/utilities/spacing/#negative-margin) for more details) if you want to use multi-level context menu:

```scss
$enable-negative-margins: true;
```

Usage:

```typescript
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ContextMenuManager from 'ember-bootstrap-context-menu/services/context-menu-manager';

export default class ApplicationController extends Controller {
  @service declare contextMenuManager: ContextMenuManager;

  @action
  showContextMenu(e: PointerEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.contextMenuManager
      .show([
        { id: 'copy', title: 'Copy' },
        { id: 'cut', title: 'Cut' },
        { id: 'paste', title: 'Paste' },
        { id: 'delete', title: 'Delete' },
      ], e.pageX, e.pageY)
      .then(({ id }) => {
        if (id === 'delete') {
          // do delete
          return;
        }
        if (id === 'copy') {
          // do copy
          return;
        }
        if (id === 'cut') {
          // do cut
          return;
        }
        if (id === 'paste') {
          // do paste
          return;
        }
      });
  }
}
```

```hbs
<div {{on "contextmenu" this.showContextMenu}}>
  Right click me
</div>
```

## Compatibility

* `ember-bootstrap@6`
* `bootstrap@5`

## Demo

Check [demo-page](https://onechiporenko.github.io/ember-bootstrap-context-menu/#/demo)
