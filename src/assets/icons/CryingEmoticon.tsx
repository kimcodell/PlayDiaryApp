import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import AppColors from '../../utils/AppColors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const CryingEmoticon = (props: Props) => {
  const { width = 48, height = 48, color = AppColors.textSecondary } = props;
  return (
    <SvgCss
      xml={`
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="45" height="45" rx="10.5" stroke="${color}" stroke-width="3"/>
        <circle cx="31.75" cy="18.75" r="2.75" fill="${color}"/>
        <circle cx="15.75" cy="18.75" r="2.75" fill="${color}"/>
        <path d="M20.75 33.6C20.75 36.5215 18.5486 38.75 16 38.75C13.4514 38.75 11.25 36.5215 11.25 33.6C11.25 32.2951 12.1161 30.7277 13.4251 29.0408C14.0433 28.244 14.7083 27.4834 15.3353 26.7662L15.3708 26.7257L15.3711 26.7253C15.5838 26.482 15.796 26.2393 16 26.0011C16.204 26.2393 16.4162 26.482 16.6289 26.7253L16.6292 26.7257L16.6647 26.7662C17.2917 27.4834 17.9567 28.244 18.5749 29.0408C19.8839 30.7277 20.75 32.2951 20.75 33.6Z" stroke="${color}" stroke-width="2.5"/>
        <path d="M21 31.5C29.5 30.5 30.5 32.1567 34.5 36.5905" stroke="${color}" stroke-width="2.5"/>
        </svg>      
      `}
      width={width}
      height={height}
    />
  );
};

export default CryingEmoticon;
