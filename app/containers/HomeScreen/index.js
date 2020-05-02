/**
 *
 * HomeScreen
 *
 */

import React, { memo } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function HomeScreen({ navigation }) {
  useInjectReducer({ key: 'homeScreen', reducer });
  useInjectSaga({ key: 'homeScreen', saga });

  return (
    <View>
      <Text>This is the HomeScreen Container!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <LocaleToggle />
    </View>
  );
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withCompose = compose(withConnect, memo)(HomeScreen);

withCompose.navigationOptions = {
  headerTitle: () => (
    <Text>
      <FormattedMessage {...messages.title} />
    </Text>
  ),
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#ff4f',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default withCompose;
