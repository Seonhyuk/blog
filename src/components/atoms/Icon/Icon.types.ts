import type { HTMLAttributes } from 'react';

import type * as icons from './icons';

export type IconType = keyof typeof icons;

export type IconProps = HTMLAttributes<HTMLOrSVGElement> & {
  icon: IconType;
  size?: number;
  color?: string;
};
