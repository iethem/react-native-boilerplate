/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

import globalReducer from './containers/App/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state

  return rootReducer;
}
