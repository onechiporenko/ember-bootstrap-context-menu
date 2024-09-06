import type { MenuItem } from '../types/menu-item.interface';

export const findPathToMenuItem = (
  menuItems: MenuItem[],
  targetId: string,
): string[] => {
  const findPath = (items: MenuItem[], path: string[]): string[] => {
    for (const item of items) {
      const currentPath = [...path, item.id];
      if (item.id === targetId) {
        return currentPath;
      }
      if (item.submenu) {
        const result = findPath(item.submenu.items, currentPath);
        if (result.length > 0) {
          return result;
        }
      }
    }
    return [];
  };

  return findPath(menuItems, []);
};
