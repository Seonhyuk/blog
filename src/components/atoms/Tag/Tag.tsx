import { theme } from '@/styles';

import { tagStyle } from './Tag.css';
import type { TagProps } from './Tag.types';

const Tag = ({ color = theme.colors.primary['500'], className = '', style, children }: TagProps) => {
  return (
    <div className={`${tagStyle} ${className}`} style={{ backgroundColor: color, ...style }}>
      {children}
    </div>
  );
};

export default Tag;
