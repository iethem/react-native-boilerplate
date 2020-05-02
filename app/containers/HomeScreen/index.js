/**
 *
 * HomeScreen
 *
 */

import React, { memo } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import Button from 'components/Button';
import Header from 'components/Header';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import messages from './messages';

const docs = 'https://github.com/iethem/react-native-boilerplate';

export function HomeScreen({ navigation }) {
  useInjectReducer({ key: 'homeScreen', reducer });
  useInjectSaga({ key: 'homeScreen', saga });

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Details')}>
              <Text style={styles.buttonText}>
                <FormattedMessage {...messages.detailsButton} />
              </Text>
            </Button>

            <View style={styles.linkContainer}>
              <View style={styles.localeToggle}>
                <LocaleToggle />
              </View>
              <Text style={styles.description}>
                <FormattedMessage {...messages.chooseLanguage} />
              </Text>
            </View>

            <View style={styles.separator} />
            <Button
              accessibilityRole="button"
              onPress={() => openURLInBrowser(docs)}
              style={styles.linkContainer}
            >
              <Text style={{ ...styles.description, color: '#1292B4' }}>
                <FormattedMessage {...messages.learnMore} />
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>
          <FormattedMessage {...messages.header} />
        </Text>
      </View>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object,
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

export default compose(withConnect, memo)(HomeScreen);
