import { fromJS } from 'immutable';
import detailsScreenReducer from '../reducer';

describe('detailsScreenReducer', () => {
  it('returns the initial state', () => {
    expect(detailsScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});
