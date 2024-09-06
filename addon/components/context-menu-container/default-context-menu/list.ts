import Component from '@glimmer/component';
import type { MenuItem } from '../../../types/menu-item.interface';

interface ContextMenuContainerDefaultContextMenuListSignature {
  // The arguments accepted by the component
  Args: {
    ddm: Component;
    items: MenuItem[];
    menuItemClicked: (menuItem: MenuItem, e: Event) => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ContextMenuContainerDefaultContextMenuListComponent extends Component<ContextMenuContainerDefaultContextMenuListSignature> {}
