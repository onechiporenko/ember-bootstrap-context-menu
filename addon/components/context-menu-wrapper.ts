import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';
import { next } from '@ember/runloop';
import type { MenuItem } from 'ember-bootstrap-context-menu/types/menu-item.interface';
import type { MenuSettings } from '../types/menu-settings.interface';

export interface ContextMenuWrapperSignature {
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

interface DropdownApi {
  toggleDropdown: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
}

export default class ContextMenuWrapper extends Component<ContextMenuWrapperSignature> {
  declare dropdownApiCloseDropdown: () => void;

  get styles(): ReturnType<typeof htmlSafe> {
    return htmlSafe(
      `left: ${this.args.settings.x}px; top: ${this.args.settings.y}px; position: absolute; z-index: 3000;`,
    );
  }

  get overlayStyles(): ReturnType<typeof htmlSafe> {
    return htmlSafe(
      `position: fixed; width: ${window.innerWidth}px; height: ${window.innerHeight}px; z-index: 2999; top: 0; left: 0; cursor: default;`,
    );
  }

  @action
  storeDropdownApi(dropdownApi: DropdownApi): void {
    this.dropdownApiCloseDropdown = dropdownApi.closeDropdown;
    next(() => dropdownApi.openDropdown());
  }

  @action
  closeDropdown(): void {
    this.dropdownApiCloseDropdown();
    this.args.onCloseMenu();
  }

  @action
  menuItemClicked(menuItem: MenuItem, e: Event): boolean {
    e?.preventDefault();
    e?.stopPropagation();
    if (menuItem.submenu?.items?.length) {
      return false;
    }
    this.args.onMenuItemClick(menuItem);
    this.dropdownApiCloseDropdown();
    return false;
  }
}
