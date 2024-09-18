'use client';

import { useEffect, useMemo, useState } from 'react';

import { darkTheme, lightTheme } from '@/styles';

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string | null>('');

  const isDark = useMemo(() => theme === 'dark', [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, [isDark]);

  return <div className={`${theme === 'dark' ? darkTheme : lightTheme}`}>{children}</div>;
};

export default ThemeProvider;
