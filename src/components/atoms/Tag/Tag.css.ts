import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const tagStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${theme.padding[100]} ${theme.padding[200]}`,
  borderRadius: theme.radius[300],
});
