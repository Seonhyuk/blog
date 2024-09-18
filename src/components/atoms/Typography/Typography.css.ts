import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const typographyVariant = styleVariants({
  display1: { fontSize: vars.theme.font['900'] },
  display2: { fontSize: vars.theme.font['800'] },
  heading1: { fontSize: vars.theme.font['700'] },
  heading2: { fontSize: vars.theme.font['600'] },
  heading3: { fontSize: vars.theme.font['500'] },
  body1: { fontSize: vars.theme.font['400'] },
  body2: { fontSize: vars.theme.font['300'] },
  caption: { fontSize: vars.theme.font['200'] },
  overline: { fontSize: vars.theme.font['100'] },
});

export const textAlignments = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});

export const verticalAlignments = styleVariants({
  top: { verticalAlign: 'top' },
  middle: { verticalAlign: 'middle' },
  bottom: { verticalAlign: 'bottom' },
});

export const inlineElement = style({
  display: 'inline-block',
});

export const fontWeights = styleVariants({
  normal: { fontWeight: vars.theme.weight['normal'] },
  bold: { fontWeight: vars.theme.weight['bold'] },
});
