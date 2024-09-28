import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { Header } from '@/components';
import { MENU_LIST } from '@/constants';
import { ReactQueryProvider, ThemeProvider } from '@/providers';

import './globals.css';
import './page.css';

const pretendardMedium = localFont({
  src: '../public/fonts/Pretendard-Medium.subset.woff',
  variable: '--font-pretendard-medium',
  weight: '400',
  display: 'swap',
});

const pretendardBold = localFont({
  src: '../public/fonts/Pretendard-ExtraBold.subset.woff',
  variable: '--font-pretendard-bold',
  weight: '700',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Seonhyuk's Tech Blog",
  description: '모바일 개발로 입사한 프론트엔드 개발자의 이야기',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${pretendardMedium.variable} ${pretendardBold.variable}`}>
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
