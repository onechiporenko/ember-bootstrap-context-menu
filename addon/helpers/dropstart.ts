import { helper } from '@ember/component/helper';
import type { MenuItem } from '../types/menu-item.interface';

export default helper(function dropstart([item]: [MenuItem]) {
  return !!item.submenu?.items?.length && item.submenu?.position === 'start';
});
