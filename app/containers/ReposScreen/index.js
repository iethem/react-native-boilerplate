/**
 *
 * ReposScreen
 *
 */

import React, { memo, useEffect, useLayoutEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Button from 'components/Button';
import Img from 'components/Img';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from 'containers/App/actions';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectUsername } from './selectors';
import { changeUsername } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ReposScreen({
  navigation,
  username,
  loading,
  error,
  repos,
  onPress,
  onChangeUsername,
}) {
  useInjectReducer({ key: 'reposScreen', reducer });
  useInjectSaga({ key: 'reposScreen', saga });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text>
          <FormattedMessage {...messages.title} />
        </Text>
      ),
    });
  }, []);

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onPress();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="iethem"
          onChangeText={onChangeUsername}
          value={username}
        />
        <Button onPress={onPress}>
          <Text style={styles.buttonText}>
            <FormattedMessage {...messages.search} />
          </Text>
        </Button>
      </View>
      {error && (
        <View style={{ padding: 10 }}>
          <Text>
            <FormattedMessage {...messages.somethingWentWrong} />
          </Text>
        </View>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={repos}
          renderItem={({ item }) => (
            <>
              <View style={styles.separator} />
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => openURLInBrowser(item.html_url)}
                style={styles.item}
              >
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.stargazers}>
                  <Img
                    source={{
                      uri:
                        'https://github.githubassets.com/images/icons/emoji/unicode/2b50.png',
                    }}
                    style={styles.star}
                  />
                  <Text style={styles.itemText}>{item.stargazers_count}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        />
      )}
    </View>
  );
}

ReposScreen.propTypes = {
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onPress: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  separator: {
    backgroundColor: '#DAE1E7',
    height: 1,
  },
  stargazers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  star: { width: 20, height: 20 },
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: text => dispatch(changeUsername(text)),
    onPress: () => {
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ReposScreen);
