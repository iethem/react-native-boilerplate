/*
 *
 * HomeScreen actions
 *
 */

import { DEFAULT_ACTION, PUT_TEST_DATA, READ_TEST_DATA } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function putTestData(data) {
  return {
    type: PUT_TEST_DATA,
    data,
  };
}

export function readTestData() {
  return { type: READ_TEST_DATA };
}
