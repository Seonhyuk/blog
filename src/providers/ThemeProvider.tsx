'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';

import { darkTheme, lightTheme, themeProviderStyle } from '@/styles';

type ThemeProviderProps = HTMLAttributes<HTMLDivElement>;

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string | null>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return <div className={`${themeProviderStyle} ${theme === 'dark' ? darkTheme : lightTheme}`}>{children}</div>;
};

export default ThemeProvider;
