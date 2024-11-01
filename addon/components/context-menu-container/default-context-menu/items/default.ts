import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import HoverBridgeService from '../../../../services/hover-bridge';
import { action } from '@ember/object';
import type { MenuItem } from '../../../../types/menu-item.interface';
import { cancelTask, runTask } from 'ember-lifeline';
import type { EmberRunTimer } from '@ember/runloop/types';
import { modifier } from 'ember-modifier';

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
  Element: HTMLLIElement;
}

export default class ContextMenuContainerDefaultContextMenuItemsDefault extends Component<ContextMenuContainerDefaultContextMenuItemsDefaultSignature> {
  @tracked
  hovered = false;

  @service
  declare hoverBridge: HoverBridgeService;

  declare hoverTimer: EmberRunTimer | number;

  listenMouseHoverEvents = modifier((element: HTMLElement) => {
    if (this.args.item.disabled) {
      return;
    }
    this.hoverBridge.sub(this);
    element.addEventListener('mouseenter', this.mouseEnter);
    element.addEventListener('mouseleave', this.mouseLeave);
    return () => {
      this.hoverBridge.unsub(this);
      element.removeEventListener('mouseenter', this.mouseEnter);
      element.removeEventListener('mouseleave', this.mouseLeave);
    };
  });

  get hasSubmenu(): boolean {
    return !!this.args.item.submenu?.items?.length;
  }

  @action
  mouseEnter(): void {
    if (this.args.item.type !== 'default') {
      return;
    }
    this.hovered = true;
    this.hoverBridge.setHovered(this.args.item.id);
    cancelTask(this, this.hoverTimer as EmberRunTimer);
  }

  @action
  mouseLeave(): void {
    if (this.args.item.type !== 'default') {
      return;
    }
    this.hoverTimer = runTask(this, () => (this.hovered = false), 300);
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
      cancelTask(this, this.hoverTimer as EmberRunTimer);
      this.hovered = false;
    }
  }
}
