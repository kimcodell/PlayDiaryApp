import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const RefreshIcon = (props: Props) => {
  const { width = 24, height = 24, color = AppColors.textPrimary } = props;
  return (
    <SvgCss
      xml={`
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="${color}" stroke-width="2" d="M17.3333333,9.33333333 C16.3982691,7.36020781 14.3579813,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 M18.5,6 L18.5,10 L14.5,10"/>
        </svg>    
        `}
      width={width}
      height={height}
    />
  );
};

export default RefreshIcon;
