import { helper } from '@ember/component/helper';
import type { MenuItem } from '../types/menu-item.interface';

export default helper(function dropend([item]: [MenuItem]) {
  return (
    !!item.submenu?.items?.length &&
    (item.submenu?.position === 'end' || item.submenu?.position === undefined)
  );
});
