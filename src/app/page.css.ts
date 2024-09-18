import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  paddingBlock: '32px',
  backgroundColor: theme.colors.background[100],
});
