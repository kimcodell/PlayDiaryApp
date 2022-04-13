import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const UserIcon = (props: Props) => {
  const { width = 24, height = 24, color = AppColors.textPrimary } = props;
  return (
    <SvgCss
      xml={`
        <svg width="24" height="24" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.96" cy="6.5" r="6.5" fill="${color}"/>
          <path d="M23.7549 24.0084C23.9375 25.0978 23.0242 26 21.9196 26C19.3735 26 17.2672 26 11.96 26C6.16735 26 6.11954 26 2.00094 26C0.896367 26 -0.0175257 25.0978 0.165069 24.0084C1.11333 18.351 6.03321 14.04 11.96 14.04C17.8868 14.04 22.8067 18.351 23.7549 24.0084Z" fill="${color}"/>
        </svg>
        `}
      width={width}
      height={height}
    />
  );
};

export default UserIcon;
