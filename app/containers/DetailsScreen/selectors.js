import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailsScreen state domain
 */

const selectDetailsScreenDomain = state => state.detailsScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DetailsScreen
 */

const makeSelectDetailsScreen = () =>
  createSelector(
    selectDetailsScreenDomain,
    substate => substate,
  );

export default makeSelectDetailsScreen;
export { selectDetailsScreenDomain };
