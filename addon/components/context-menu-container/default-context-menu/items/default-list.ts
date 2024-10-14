import Component from '@glimmer/component';
import type { MenuItem } from '../../../../types/menu-item.interface';

export interface ContextMenuContainerDefaultContextMenuItemsDefaultListSignature {
  // The arguments accepted by the component
  Args: {
    item: MenuItem;
    hovered: boolean;
    menuItemClicked: (menuItem: MenuItem, e: Event) => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLUListElement;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ContextMenuContainerDefaultContextMenuItemsDefaultList extends Component<ContextMenuContainerDefaultContextMenuItemsDefaultListSignature> {}
