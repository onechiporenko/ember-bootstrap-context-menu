export type Extras = Record<string, unknown>;
export interface MenuItemBase<T extends string, E extends Extras = Extras> {
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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- some props are set via generic types
export interface MenuItemDivider<E extends Extras = Extras>
  extends MenuItemBase<'divider', E> {}

export interface MenuItemHeader<E extends Extras = Extras>
  extends MenuItemBase<'header', E> {
  title: string;
}

export interface MenuItemDefault<E extends Extras = Extras>
  extends MenuItemBase<'default', E> {
  title: string;
}

export type MenuItem = MenuItemDivider | MenuItemHeader | MenuItemDefault;
