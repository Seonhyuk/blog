import { theme } from '@/styles';

import type { IconProps } from './Icon.types';
import * as icons from './icons';

const Icon = ({ icon, size = 25, color = theme.colors.grey[800], onClick, ...rest }: IconProps) => {
  const SVGIcon = icons[icon];

  return <SVGIcon onClick={onClick} width={size} height={size} fill={color} {...rest} />;
};

export default Icon;
