/**
 *
 * HomeScreen
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { View, Text, Button } from 'react-native';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { putTestData } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the HomeScreen Container!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeScreen: makeSelectHomeScreen(),
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

const withReducer = injectReducer({ key: 'homeScreen', reducer });
const withSaga = injectSaga({ key: 'homeScreen', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomeScreen);
