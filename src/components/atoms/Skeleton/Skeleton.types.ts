import type { HTMLAttributes } from 'react';

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  width: CSSUnit;
  height: CSSUnit;
  radius?: string;
};
