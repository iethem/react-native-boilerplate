import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reposScreen state domain
 */

const selectReposScreenDomain = state => state.reposScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectUsername = () =>
  createSelector(selectReposScreenDomain, substate => substate.username);

/**
 * Default selector used by ReposScreen
 */

const makeSelectReposScreen = () =>
  createSelector(selectReposScreenDomain, substate => substate);

export default makeSelectReposScreen;
export { selectReposScreenDomain, makeSelectUsername };
