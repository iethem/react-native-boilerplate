/**
 *
 * HomeScreen
 *
 */

import React from 'react';
import { Text, View } from 'react-native';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function HomeScreen(props) {
  return (
    <View>
      <Text>
        <FormattedMessage {...messages.header} />
      </Text>
    </View>
  );
}
