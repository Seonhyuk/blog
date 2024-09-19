import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { Header } from '@/components';
import { MENU_LIST } from '@/constants';
import { ReactQueryProvider, ThemeProvider } from '@/providers';

import './globals.css';
import './page.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '400 700',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Seonhyuk's Tech Blog",
  description: '모바일 개발로 입사한 프론트엔드 개발자의 이야기',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>
        <ReactQueryProvider>
          <ThemeProvider>
            <Header menuList={MENU_LIST} />
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
