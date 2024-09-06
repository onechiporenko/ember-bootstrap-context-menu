import Service from '@ember/service';

import ContextMenuContainerDefaultContextMenuItemComponent from '../components/context-menu-container/default-context-menu/item';
import type { MenuItem } from '../types/menu-item.interface';
import { findPathToMenuItem } from '../utils/find-path-to-menu-item.function';

export default class HoverBridgeService extends Service {
  protected menuItemComponents: ContextMenuContainerDefaultContextMenuItemComponent[] =
    [];
  protected menuItems: MenuItem[] = [];

  setHovered(id: string): void {
    this.forceEachItemMouseLeaveIfNeeded(id);
  }

  setMenuItems(menuItems: MenuItem[]): void {
    this.menuItems = menuItems;
  }

  sub(item: ContextMenuContainerDefaultContextMenuItemComponent): void {
    if (this.menuItemComponents.includes(item)) {
      return;
    }
    this.menuItemComponents.push(item);
  }

  unsub(item: ContextMenuContainerDefaultContextMenuItemComponent): void {
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
