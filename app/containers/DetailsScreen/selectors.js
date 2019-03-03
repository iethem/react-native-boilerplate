import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailsScreen state domain
 */

const selectDetailsScreenDomain = state =>
  state.get('detailsScreen', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DetailsScreen
 */

const makeSelectDetailsScreen = () =>
  createSelector(selectDetailsScreenDomain, substate => substate.toJS());

export default makeSelectDetailsScreen;
export { selectDetailsScreenDomain };
