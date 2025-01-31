import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import RSVP, { defer } from 'rsvp';

import ContextMenuContainerDefaultContextMenuComponent from '../components/context-menu-container/default-context-menu';
import type { MenuItem } from '../types/menu-item.interface';
import type {
  MenuComponent,
  MenuSettings,
} from '../types/menu-settings.interface';
import HoverBridgeService from './hover-bridge';

export default class ContextMenuManagerService extends Service {
  @service
  declare hoverBridge: HoverBridgeService;
  @tracked
  declare settings: MenuSettings;
  declare protected contextMenuDeferred: RSVP.Deferred<MenuItem>;

  show(
    menuItems: MenuItem[],
    x: number,
    y: number,
    componentToRender?: MenuComponent,
  ): Promise<MenuItem> {
    this.settings = {
      x,
      y,
      componentToRender:
        componentToRender ?? ContextMenuContainerDefaultContextMenuComponent,
      menuItems,
    };
    this.contextMenuDeferred = defer();
    this.hoverBridge.setMenuItems(this.settings.menuItems);
    return this.contextMenuDeferred.promise;
  }

  onMenuItemClick(menuItem: MenuItem): void {
    this.contextMenuDeferred.resolve(menuItem);
    this.clearSettings();
  }

  onCloseMenu(): void {
    this.contextMenuDeferred.reject();
    this.clearSettings();
  }

  protected clearSettings(): void {
    this.settings = {} as MenuSettings;
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:context-menu-manager')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('context-menu-manager') declare altName: ContextMenuManagerService;`.
declare module '@ember/service' {
  interface Registry {
    'context-menu-manager': ContextMenuManagerService;
  }
}
