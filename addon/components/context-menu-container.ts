import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';

import ContextMenuManagerService from '../services/context-menu-manager';
import type { MenuItem } from '../types/menu-item.interface';
import type { MenuSettings } from '../types/menu-settings.interface';

interface ContextMenuContainerSignature {
  // The arguments accepted by the component
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- communication is done via service
  Args: {
    // no arguments here
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ContextMenuContainerComponent extends Component<ContextMenuContainerSignature> {
  @service declare contextMenuManager: ContextMenuManagerService;

  get settings(): MenuSettings {
    return this.contextMenuManager.settings;
  }

  @action
  onMenuItemClick(menuItem: MenuItem): void {
    this.contextMenuManager.onMenuItemClick(menuItem);
  }

  @action
  onCloseMenu(): void {
    this.contextMenuManager.onCloseMenu();
  }
}
