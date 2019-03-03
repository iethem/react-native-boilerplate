/**
 *
 * DetailsScreen
 *
 */

import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelecHomeScreen from '../HomeScreen/selectors';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectDetailsScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the DetailsScreen Container!</Text>
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detailsScreen: makeSelectDetailsScreen(),
  homeScreen: makeSelecHomeScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'detailsScreen', reducer });
const withSaga = injectSaga({ key: 'detailsScreen', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DetailsScreen);
