import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon = (props: Props) => {
  const { width = 20, height = 21, color = AppColors.textPrimary } = props;
  return (
    <SvgCss
      xml={`
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.6441" cy="10.6441" r="9.14412" stroke="${color}" stroke-width="3"/>
          <line x1="23.4867" y1="25.6919" x2="18.7184" y2="20.0092" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
        </svg>
      `}
      width={width}
      height={height}
    />
  );
};

export default SearchIcon;
