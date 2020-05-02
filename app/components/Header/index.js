/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { FormattedMessage } from 'react-intl';

import Logo from './logo.png';
import messages from './messages';

function Header() {
  return (
    <ImageBackground
      accessibilityRole="image"
      source={Logo}
      style={styles.background}
      imageStyle={styles.logo}
    >
      <Text style={styles.text}>
        <FormattedMessage {...messages.welcome} />
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: '#F3F3F3',
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});

export default memo(Header);
