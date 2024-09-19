import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifySelf: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  width: '100%',
  minWidth: '320px',
  maxWidth: '1400px',
  minHeight: 'calc(100vh - 50px)',
  paddingTop: '50px',
  gap: '16px',
  backgroundColor: theme.colors.background[100],
});
