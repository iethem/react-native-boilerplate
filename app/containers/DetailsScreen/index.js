/**
 *
 * DetailsScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Button from 'components/Button';
import Img from 'components/Img';
import makeSelectHomeScreen from 'containers/HomeScreen/selectors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDetailsScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function DetailsScreen(props) {
  useInjectReducer({ key: 'detailsScreen', reducer });
  useInjectSaga({ key: 'detailsScreen', saga });

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text>
          <FormattedMessage {...messages.title} />
        </Text>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Img />
        <Text style={styles.sectionTitle}>
          <FormattedMessage {...messages.header} />
        </Text>
        <Text style={styles.sectionDescription}>
          <FormattedMessage
            {...messages.editContainer}
            values={{
              container: (
                <Text style={styles.highlight}>
                  containers/DetailsScreen/index.js
                </Text>
              ),
            }}
          />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Button onPress={() => navigation.navigate('Repos')}>
          <Text style={styles.buttonText}>
            <FormattedMessage {...messages.repositories} />
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

DetailsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});

const mapStateToProps = createStructuredSelector({
  detailsScreen: makeSelectDetailsScreen(),
  homeScreen: makeSelectHomeScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DetailsScreen);
