import React from 'react';
import { Image } from 'react-native';

function Img() {
  const pic = { uri: 'https://octodex.github.com/images/original.png' };
  return <Image source={pic} style={{ width: 150, height: 150 }} />;
}

export default Img;
