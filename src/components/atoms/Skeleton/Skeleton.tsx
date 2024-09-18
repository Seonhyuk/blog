import { useMemo } from 'react';

import { skeletonStyle } from './Skeleton.css';
import type { SkeletonProps } from './Skeleton.types';

const Skeleton = ({ width, height, radius, className, style, ...rest }: SkeletonProps) => {
  const mergedStyle = useMemo(
    () => ({
      ...style,
      width,
      height,
      borderRadius: radius,
    }),
    [height, radius, style, width],
  );

  return <div className={`${skeletonStyle} ${className || ''}`} style={mergedStyle} {...rest} />;
};

export default Skeleton;
