import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { MenuItem } from 'ember-bootstrap-context-menu/types/menu-item.interface';

export interface CustomContextMenuSignature {
  // The arguments accepted by the component
  Args: {
    // no-op
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class CustomContextMenu extends Component<CustomContextMenuSignature> {
  @tracked
  btn1: MenuItem = {
    id: 'btn1',
    type: 'default',
    title: 'Btn 1',
  };

  @tracked
  btn2: MenuItem = {
    id: 'btn2',
    type: 'default',
    title: 'Btn 2',
  };

  @tracked
  btn3: MenuItem = {
    id: 'btn3',
    type: 'default',
    title: 'Btn 3',
  };

  @tracked
  btn4: MenuItem = {
    id: 'btn4',
    type: 'default',
    title: 'Btn 4',
  };

  @tracked
  menuItems: MenuItem[] = [
    { id: 'divider', type: 'divider' },
    { id: 'header', title: 'Menu Items', type: 'header' },
    { id: '1', title: 'One Level Item 1', type: 'default' },
    { id: '2', title: 'One Level Item 2', type: 'default' },
    { id: '3', title: 'One Level Item 3', type: 'default' },
    { id: 'divider', type: 'divider' },
  ];
}
