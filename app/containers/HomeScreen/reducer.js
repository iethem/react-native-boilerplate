/*
 *
 * HomeScreen reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TEST_DATA } from './constants';

export const initialState = fromJS({
  data: null,
});

function homeScreenReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PUT_TEST_DATA:
      return state.merge({ data: action.data });
    default:
      return state;
  }
}

export default homeScreenReducer;
