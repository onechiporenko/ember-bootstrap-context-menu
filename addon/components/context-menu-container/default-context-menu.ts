import Component from '@glimmer/component';
import type { MenuSettings } from '../../types/menu-settings.interface';
import type { MenuItem } from '../../types/menu-item.interface';

interface ContextMenuContainerDefaultContextMenuSignature {
  // The arguments accepted by the component
  Args: {
    settings: MenuSettings;
    onMenuItemClick: (menuItem: MenuItem) => void;
    onCloseMenu: () => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}

export default class ContextMenuContainerDefaultContextMenuComponent extends Component<ContextMenuContainerDefaultContextMenuSignature> {}
