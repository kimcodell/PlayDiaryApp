import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronRightIcon = (props: Props) => {
  const { width = 24, height = 24, color = AppColors.textPrimary } = props;
  return (
    <SvgCss
      xml={`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m15 12 .707-.707.707.707-.707.707L15 12zM9.707 5.293l6 6-1.414 1.414-6-6 1.414-1.414zm6 7.414-6 6-1.414-1.414 6-6 1.414 1.414z" fill="${color}" />
          </svg>
        `}
      width={width}
      height={height}
    />
  );
};

export default ChevronRightIcon;
