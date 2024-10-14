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

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class CustomContextMenuWithIcons extends Component<CustomContextMenuWithIconsSignature> {}
