import { action } from '@ember/object';
import Component from '@glimmer/component';

import type { MenuItem } from '../../../../types/menu-item.interface';

export interface ContextMenuContainerDefaultContextMenuItemsDefaultLinkSignature {
  // The arguments accepted by the component
  Args: {
    item: MenuItem;
    menuItemClicked: (menuItem: MenuItem, e: Event) => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLAnchorElement;
}

export default class ContextMenuContainerDefaultContextMenuItemsDefaultLink extends Component<ContextMenuContainerDefaultContextMenuItemsDefaultLinkSignature> {
  get hasSubmenu(): boolean {
    return !!this.args.item?.submenu?.items?.length;
  }

  @action
  onClick(e: PointerEvent): void {
    if (this.args.item?.disabled) {
      return;
    }
    this.args.menuItemClicked?.(this.args.item, e);
  }
}
