import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import HoverBridgeService from '../../../../services/hover-bridge';
import type { EmberRunTimer } from '@ember/runloop/types';
import { action } from '@ember/object';
import { cancel, later } from '@ember/runloop';
import type { MenuItem } from '../../../../types/menu-item.interface';

export interface ContextMenuContainerDefaultContextMenuItemsDefaultSignature {
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
  Element: null;
}

export default class ContextMenuContainerDefaultContextMenuItemsDefault extends Component<ContextMenuContainerDefaultContextMenuItemsDefaultSignature> {
  @tracked
  hovered = false;

  @service
  declare hoverBridge: HoverBridgeService;

  hoverTimer?: EmberRunTimer;

  get hasSubmenu(): boolean {
    return !!this.args.item.submenu?.items?.length;
  }

  get dropstart(): boolean {
    return this.args.item.submenu?.position === 'start';
  }

  get dropend(): boolean {
    return (
      this.args.item.submenu?.position === 'end' ||
      this.args.item.submenu?.position === undefined
    );
  }

  @action
  mouseEnter(): void {
    if (this.args.item.type !== 'default') {
      return;
    }
    this.hovered = true;
    this.hoverBridge.setHovered(this.args.item.id);
    cancel(this.hoverTimer);
  }

  @action
  mouseLeave(): void {
    if (this.args.item.type !== 'default') {
      return;
    }
    this.hoverTimer = later(() => (this.hovered = false), 300);
  }

  @action
  addEventListeners(
    self: ContextMenuContainerDefaultContextMenuItemsDefault,
    element: HTMLElement,
  ): void {
    self.hoverBridge.sub(self);
    element.addEventListener('mouseenter', this.mouseEnter);
    element.addEventListener('mouseleave', this.mouseLeave);
  }

  @action
  removeEventListeners(
    self: ContextMenuContainerDefaultContextMenuItemsDefault,
    element: HTMLElement,
  ): void {
    self.hoverBridge.unsub(self);
    element.removeEventListener('mouseenter', this.mouseEnter);
    element.removeEventListener('mouseleave', this.mouseLeave);
  }

  forceMouseLeaveIfNeeded(ids: string[]): void {
    if (!ids.includes(this.args.item.id)) {
      cancel(this.hoverTimer);
      this.hovered = false;
    }
  }
}
