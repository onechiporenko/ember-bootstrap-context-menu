import Component from '@glimmer/component';

export interface CustomContextMenuWithIconsSignature {
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

export default class CustomContextMenuWithIcons extends Component<CustomContextMenuWithIconsSignature> {}
