import Component from '@glimmer/component';

import type { MenuItem } from '../../types/menu-item.interface';
import type { MenuSettings } from '../../types/menu-settings.interface';

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

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ContextMenuContainerDefaultContextMenuComponent extends Component<ContextMenuContainerDefaultContextMenuSignature> {}
