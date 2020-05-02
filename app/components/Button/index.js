/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={props.style || styles.button}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9400D3',
  },
});

export default memo(Button);
