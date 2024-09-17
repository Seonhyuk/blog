import { globalStyle, createGlobalTheme } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body, h1, h2, h3, h4, h5, h6, p, ol, ul', {
  margin: 0,
  padding: 0,
  fontSize: '100%',
  lineHeight: '1.5',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

const root = createGlobalTheme('#root', {});

export const vars = { ...root, theme };
