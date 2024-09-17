import { createThemeContract, createTheme } from '@vanilla-extract/css';

export const theme = createThemeContract({
  colors: {},
  spacing: {},
  radius: {},
  font: {},
  weight: { normal: '400', bold: '700' },
});

export const lightTheme = createTheme(theme, {
  colors: {},
  spacing: {},
  radius: {},
  font: {},
  weight: { normal: '400', bold: '700' },
});

export const darkTheme = createTheme(theme, {
  colors: {},
  spacing: {},
  radius: {},
  font: {},
  weight: { normal: '400', bold: '700' },
});
