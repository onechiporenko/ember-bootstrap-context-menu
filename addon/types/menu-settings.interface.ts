import Component from '@glimmer/component';

import type { MenuItem } from './menu-item.interface';

/* eslint-disable @typescript-eslint/no-explicit-any -- component with any signature could be here */
export type MenuComponent = typeof Component<any>;

export interface MenuSettings<T extends MenuComponent = MenuComponent> {
  x: number;
  y: number;
  menuItems: MenuItem[];
  componentToRender: T;
}
