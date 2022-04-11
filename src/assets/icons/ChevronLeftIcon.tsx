import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronLefttIcon = (props: Props) => {
  const { width = 24, height = 24, color = AppColors.textPrimary } = props;
  return (
    <SvgCss
      xml={`
      <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>.cls-1{fill:${color};}</style>
        </defs>
        <title>chevron-left</title>
        <g id="chevron-left-Regular">
          <path id="chevron-left-Regular-2" data-name="chevron-left-Regular" class="cls-1" d="M16.53,20.47a.75.75,0,1,1-1.06,1.06l-9-9a.749.749,0,0,1,0-1.06l9-9a.75.75,0,0,1,1.06,1.06L8.061,12Z"/>
        </g>
        </svg>
        `}
      width={width}
      height={height}
    />
  );
};

export default ChevronLefttIcon;
