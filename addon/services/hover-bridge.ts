import Service from '@ember/service';

import type { MenuItem } from '../types/menu-item.interface';
import { findPathToMenuItem } from '../utils/find-path-to-menu-item.function';
import ContextMenuContainerDefaultContextMenuItemsDefault from '../components/context-menu-container/default-context-menu/items/default';

export default class HoverBridgeService extends Service {
  protected menuItemComponents: ContextMenuContainerDefaultContextMenuItemsDefault[] =
    [];
  protected menuItems: MenuItem[] = [];

  setHovered(id: string): void {
    this.forceEachItemMouseLeaveIfNeeded(id);
  }

  setMenuItems(menuItems: MenuItem[]): void {
    this.menuItems = menuItems;
  }

  sub(item: ContextMenuContainerDefaultContextMenuItemsDefault): void {
    if (this.menuItemComponents.includes(item)) {
      return;
    }
    this.menuItemComponents.push(item);
  }

  unsub(item: ContextMenuContainerDefaultContextMenuItemsDefault): void {
    const index = this.menuItemComponents.indexOf(item);
    if (index === -1) {
      return;
    }
    this.menuItemComponents.splice(index, 1);
  }

  forceEachItemMouseLeaveIfNeeded(id: string): void {
    const ids = findPathToMenuItem(this.menuItems, id);
    this.menuItemComponents.forEach((item) =>
      item.forceMouseLeaveIfNeeded(ids),
    );
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:hover-bridge')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('hover-bridge') declare altName: HoverBridgeService;`.
declare module '@ember/service' {
  interface Registry {
    'hover-bridge': HoverBridgeService;
  }
}
