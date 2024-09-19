import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  height: '50px',
  zIndex: 1000,
  top: 0,
  gap: theme.spacing[300],
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

export const headerLink = style({
  selectors: {
    '&:hover': {
      color: `${theme.colors.primary[900]} !important`,
    },
  },
  transition: 'color 0.5s ease-in-out',
});
