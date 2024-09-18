import { style, keyframes } from '@vanilla-extract/css';

import { theme } from '@/styles';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200px 0' },
  '100%': { backgroundPosition: '200px 0' },
});

export const skeletonStyle = style({
  backgroundColor: theme.colors.grey[300],
  backgroundImage: `linear-gradient(90deg, ${theme.colors.grey[300]} 25%, ${theme.colors.grey[100]} 50%, ${theme.colors.grey[300]} 75%)`,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite`,
  borderRadius: theme.radius[300],
});
