import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import type ContextMenuManagerService from 'ember-bootstrap-context-menu/services/context-menu-manager';
import { tracked } from '@glimmer/tracking';
import CustomContextMenu from '../components/custom-context-menu';
import CustomContextMenuWithIcons from '../components/custom-context-menu-with-icons';

export default class DemoController extends Controller {
  @service declare contextMenuManager: ContextMenuManagerService;

  @tracked
  logs: string[] = [];

  @action
  showOneLevelContextMenu(e: PointerEvent): void {
    this.contextMenuManager
      .show(
        [
          { id: 'header', title: 'Menu Items', type: 'header' },
          { id: '1', title: 'One Level Item 1', type: 'default' },
          { id: '2', title: 'One Level Item 2', type: 'default' },
          { id: '3', title: 'One Level Item 3', type: 'default' },
          { id: 'divider', type: 'divider' },
          {
            id: '4',
            title: 'One Level Item 4',
            type: 'default',
            class: 'text-danger',
          },
        ],
        e.pageX,
        e.pageY,
      )
      .then(({ id }) => this.addLog(`One Level: ${id}`));
    e.stopPropagation();
    e.preventDefault();
  }

  @action
  showMenuWithIcons(e: PointerEvent): void {
    this.contextMenuManager
      .show(
        [
          {
            id: 'header',
            title: 'Menu Items',
            type: 'header',
            extras: {
              faIcon: { icon: 'sack-dollar', fixedWidth: true },
            },
          },
          {
            id: '1',
            title: 'One Level Item 1 with icon',
            type: 'default',
            extras: {
              faIcon: {
                icon: 'user',
                fixedWidth: true,
              },
            },
          },
          {
            id: '2',
            title: 'One Level Item 2 with icon',
            type: 'default',
            disabled: true,
            extras: {
              faIcon: {
                icon: 'ban',
                fixedWidth: true,
              },
            },
          },
          {
            id: '3',
            title: 'One Level Item 3 with icon',
            type: 'default',
            extras: {
              faIcon: {
                icon: 'rotate',
                fixedWidth: true,
              },
            },
            submenu: {
              items: [
                {
                  id: '31',
                  title: 'Submenu Item 1',
                  type: 'default',
                  extras: {
                    faIcon: {
                      icon: 'pen',
                      fixedWidth: true,
                    },
                  },
                },
              ],
            },
          },
          { id: 'divider', type: 'divider' },
          {
            id: '4',
            title: 'One Level Item 4 with icon',
            type: 'default',
            class: 'text-danger',
            extras: {
              faIcon: {
                icon: 'trash',
                fixedWidth: true,
              },
            },
          },
        ],
        e.pageX,
        e.pageY,
        CustomContextMenuWithIcons,
      )
      .then(({ id }) => this.addLog(`One Level with icon: ${id}`));
    e.stopPropagation();
    e.preventDefault();
  }

  @action
  showTwoLevelContextMenu(e: PointerEvent): void {
    this.contextMenuManager
      .show(
        [
          { id: 'header', title: 'Menu Items', type: 'header' },
          {
            id: '1',
            title: 'Two Levels Item 1',
            type: 'default',
          },
          {
            id: '2',
            title: 'Two Levels Item 2',
            type: 'default',
            disabled: true,
          },
          {
            id: '3',
            title: 'Two Levels Item 3',
            type: 'default',
            submenu: {
              items: [
                { id: '31', title: 'Submenu Item 1', type: 'default' },
                { id: '32', title: 'Submenu Item 2', type: 'default' },
                { id: '33', title: 'Submenu Item 3', type: 'default' },
                { id: 'divider', type: 'divider' },
                {
                  id: '34',
                  title: 'Submenu Item 4',
                  type: 'default',
                  class: 'text-danger',
                },
              ],
            },
          },
        ],
        e.pageX,
        e.pageY,
      )
      .then(({ id }) => this.addLog(`Two Levels: ${id}`));
    e.stopPropagation();
    e.preventDefault();
  }

  @action
  showThreeLevelContextMenu(e: PointerEvent): void {
    this.contextMenuManager
      .show(
        [
          {
            id: '3',
            title: 'Three Levels Item 3',
            type: 'default',
            submenu: {
              items: [
                { id: '31', title: 'Submenu Item 1', type: 'default' },
                {
                  id: '32',
                  title: 'Submenu Item 2',
                  type: 'default',
                  submenu: {
                    position: 'start',
                    items: [
                      { id: '321', title: 'Submenu Item 1', type: 'default' },
                      { id: '322', title: 'Submenu Item 2', type: 'default' },
                      {
                        id: '323',
                        title: 'Submenu Item 3',
                        type: 'default',
                        submenu: {
                          items: [
                            {
                              id: '3231',
                              title: 'Submenu Item 1',
                              type: 'default',
                            },
                            {
                              id: '3232',
                              title: 'Submenu Item 2',
                              type: 'default',
                            },
                            {
                              id: '3233',
                              title: 'Submenu Item 3',
                              type: 'default',
                            },
                            { id: 'divider', type: 'divider' },
                            {
                              id: '3234',
                              title: 'Submenu Item 4',
                              type: 'default',
                              class: 'text-danger',
                            },
                          ],
                        },
                      },
                      { id: 'divider', type: 'divider' },
                      {
                        id: '324',
                        title: 'Submenu Item 4',
                        type: 'default',
                        class: 'text-danger',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        e.pageX,
        e.pageY,
      )
      .then(({ id }) => this.addLog(`Three Levels: ${id}`));
    e.stopPropagation();
    e.preventDefault();
  }

  @action
  showCustomContextMenu(e: PointerEvent): void {
    this.contextMenuManager
      .show([], e.pageX, e.pageY, CustomContextMenu)
      .then(({ id }) => this.addLog(`Custom: ${id}`));
    e.stopPropagation();
    e.preventDefault();
  }

  @action
  clearLogs(): void {
    this.logs = [];
  }

  protected addLog(log: string): void {
    this.logs = [...this.logs, log];
  }
}
