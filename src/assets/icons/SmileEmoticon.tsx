import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const SmileEmoticon = (props: Props) => {
  const { width = 48, height = 48, color = AppColors.textSecondary } = props;
  return (
    <SvgCss
      xml={`
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 33C13 33 16.6667 37 24 37C31.3333 37 35 33 35 33" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
          <rect x="1.5" y="1.5" width="45" height="45" rx="10.5" stroke="${color}" stroke-width="3"/>
          <circle cx="31.75" cy="18.75" r="2.75" fill="${color}"/>
          <circle cx="15.75" cy="18.75" r="2.75" fill="${color}"/>
        </svg>      
      `}
      width={width}
      height={height}
    />
  );
};

export default SmileEmoticon;
