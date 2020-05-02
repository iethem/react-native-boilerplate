import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeScreen state domain
 */

const selectHomeScreenDomain = state => state.homeScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeScreen
 */

const makeSelectHomeScreen = () =>
  createSelector(
    selectHomeScreenDomain,
    substate => substate,
  );

export default makeSelectHomeScreen;
export { selectHomeScreenDomain };
