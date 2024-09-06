import type { ComponentLike } from '@glint/template';
import {
  dependencySatisfies,
  importSync,
  macroCondition,
} from '@embroider/macros';
import { assert } from '@ember/debug';

/* eslint-disable @typescript-eslint/no-explicit-any -- allowed here */
export const getFaIcon = (): ComponentLike<any> => {
  if (
    macroCondition(dependencySatisfies('@fortawesome/ember-fontawesome', '>=2'))
  ) {
    assert('@fortawesome/ember-fontawesome v2 not found', false);
  }
  return (
    importSync('@fortawesome/ember-fontawesome/components/fa-icon') as any
  ).default;
};
