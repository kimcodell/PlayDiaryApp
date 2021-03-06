import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const VerticalBarIcon = (props: Props) => {
  const { width = 24, height = 24, color = AppColors.textPrimary } = props;
  return (
    <SvgCss
      xml={`
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>ic_fluent_divider_short_24_filled</title>
          <desc>Created with Sketch.</desc>
          <g id="Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="ic_fluent_divider_short_24_filled" fill="${color}" fill-rule="nonzero">
              <path d="M11,5 L11,19 C11,19.5522847 11.4477153,20 12,20 C12.5522847,20 13,19.5522847 13,19 L13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 Z" id="Color"></path>
            </g>
          </g>
        </svg>
      `}
      width={width}
      height={height}
    />
  );
};

export default VerticalBarIcon;
