export interface MenuItemBase<
  T extends string,
  E extends Record<string, unknown> = Record<string, unknown>,
> {
  id: string;
  class?: string;
  disabled?: boolean;
  type: T;
  submenu?: {
    position?: 'start' | 'end'; // default: 'end'
    items: MenuItem[];
  };
  extras?: E;
}

export interface MenuItemDivider extends MenuItemBase<'divider'> {}

export interface MenuItemHeader extends MenuItemBase<'header'> {
  title: string;
}

export interface MenuItemDefault extends MenuItemBase<'default'> {
  title: string;
}

export type MenuItem = MenuItemDivider | MenuItemHeader | MenuItemDefault;
