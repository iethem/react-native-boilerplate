import { fromJS } from 'immutable';
import homeScreenReducer from '../reducer';

describe('homeScreenReducer', () => {
  it('returns the initial state', () => {
    expect(homeScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});
