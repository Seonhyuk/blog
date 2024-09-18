import { createGlobalTheme } from '@vanilla-extract/css';

import { theme } from './theme.css';

const root = createGlobalTheme(':root', {});

export const vars = { ...root, theme };
