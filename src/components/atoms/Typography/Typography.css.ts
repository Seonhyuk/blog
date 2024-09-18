import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const typographyVariant = styleVariants({
  display1: { fontSize: theme.font['900'] },
  display2: { fontSize: theme.font['800'] },
  heading1: { fontSize: theme.font['700'] },
  heading2: { fontSize: theme.font['600'] },
  heading3: { fontSize: theme.font['500'] },
  body1: { fontSize: theme.font['400'] },
  body2: { fontSize: theme.font['300'] },
  caption: { fontSize: theme.font['200'] },
  overline: { fontSize: theme.font['100'] },
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
  normal: { fontWeight: theme.weight['normal'] },
  bold: { fontWeight: theme.weight['bold'] },
});
