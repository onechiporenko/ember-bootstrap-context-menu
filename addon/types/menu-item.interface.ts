export interface MenuItemBase<T extends string> {
  id: string;
  class?: string;
  disabled?: boolean;
  type: T;
  submenu?: {
    position?: 'start' | 'end'; // default: 'end'
    items: MenuItem[];
  };
}

export interface MenuItemFaIcon {
  icon: string;
  prefix?: string;
  size?: string;
  rotation?: string;
  flip?: string;
  spin?: boolean;
  transform?: string;
  mask?: string;
  symbol?: string;
  fixedWidth?: boolean;
}

export interface MenuItemDivider extends MenuItemBase<'divider'> {}

export interface MenuItemHeader extends MenuItemBase<'header'> {
  title: string;
  faIcon?: MenuItemFaIcon;
}

export interface MenuItemDefault extends MenuItemBase<'default'> {
  title: string;
  faIcon?: MenuItemFaIcon;
}

export type MenuItem = MenuItemDivider | MenuItemHeader | MenuItemDefault;
