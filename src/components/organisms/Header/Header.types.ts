import type { HTMLAttributes } from 'react';

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  menuList: HeaderMenu[];
};
