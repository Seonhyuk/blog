'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { darkTheme, lightTheme } from '@/styles';

type ThemeProviderProps = HTMLAttributes<HTMLDivElement>;

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string | null>('light');

  const isDark = useMemo(() => theme === 'dark', [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, [isDark]);

  return <div className={`${theme === 'dark' ? darkTheme : lightTheme}`}>{children}</div>;
};

export default ThemeProvider;
