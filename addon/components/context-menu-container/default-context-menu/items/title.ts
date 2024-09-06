import Component from '@glimmer/component';
import type { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import { getFaIcon } from '../../../../utils/fa';
import type { MenuItem } from '../../../../types/menu-item.interface';

export interface ContextMenuContainerDefaultContextMenuItemsTitleSignature {
  // The arguments accepted by the component
  Args: {
    item: MenuItem;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ContextMenuContainerDefaultContextMenuItemsTitle extends Component<ContextMenuContainerDefaultContextMenuItemsTitleSignature> {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- FaIcon component signature is not needed here */
  get FaIcon(): ComponentLike<any> {
    return ensureSafeComponent(getFaIcon(), this);
  }
}
