import React from 'react';
import imgIcon from '../util/imgIcon';
import { string } from 'prop-types';

const Icon = ( { icon } ) => {
  const code = icon;
  const imgIconPath = imgIcon(code);
  return (
    <img src = { imgIconPath }
      className = "daily-image-icon"
      alt="icon-weather"
      width="33%" height="33%"
    />);
};

Icon.propTypes = {
  icon: string
};

export default Icon;