import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  paddingBlock: '32px',
  backgroundColor: vars.theme.colors.background[100],
});
