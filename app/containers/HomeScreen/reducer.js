/*
 *
 * HomeScreen reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  deneme: 'null'
};

/* eslint-disable default-case, no-param-reassign */
const homeScreenReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default homeScreenReducer;
