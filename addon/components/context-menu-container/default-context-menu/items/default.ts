import { action } from '@ember/object';
import type { EmberRunTimer } from '@ember/runloop/types';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { cancelTask, runTask } from 'ember-lifeline';
import { modifier } from 'ember-modifier';

import HoverBridgeService from '../../../../services/hover-bridge';
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
    const me = this.mouseEnter.bind(this);
    const ml = this.mouseLeave.bind(this);
    element.addEventListener('mouseenter', me);
    element.addEventListener('mouseleave', ml);
    return () => {
      this.hoverBridge.unsub(this);
      element.removeEventListener('mouseenter', me);
      element.removeEventListener('mouseleave', ml);
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

  forceMouseLeaveIfNeeded(ids: string[]): void {
    if (!ids.includes(this.args.item.id)) {
      cancelTask(this, this.hoverTimer as EmberRunTimer);
      this.hovered = false;
    }
  }
}
