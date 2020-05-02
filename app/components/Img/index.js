/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import { Image } from 'react-native';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const pic = { uri: 'https://octodex.github.com/images/original.png' };

function Img() {
  return <Image source={pic} style={{ width: 150, height: 150 }} />;
}

Img.propTypes = {};

export default memo(Img);
