'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Typography } from '@/components';
import { theme } from '@/styles';

import { header, headerLink } from './Header.css';
import type { HeaderProps } from './Header.types';

const Header = ({ menuList, className, ...rest }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <div className={`${header} ${className || ''}`} {...rest}>
      {menuList.map(({ label, href }) => (
        <Link href={href} key={label}>
          <Typography variant="heading3" color={pathname === href ? theme.colors.primary[700] : theme.colors.text[300]} className={headerLink}>
            {label}
          </Typography>
        </Link>
      ))}
    </div>
  );
};

export default Header;
