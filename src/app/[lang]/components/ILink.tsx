// components/ILink.tsx
'use client'; // nếu dùng Next.js App Router

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface ILinkProps {
  href: string;
  children: React.ReactNode;
  [key: string]: any; // Để nhận thêm các props như className,...
}

const ILink = ({ href, children, ...props }: ILinkProps) => {
  const [localeHref, setLocaleHref] = useState(href);

  useEffect(() => {
    const lang = Cookies.get('NEXT_LOCALE') || 'vi'; // fallback mặc định
    const localized = `/${lang}/${href.replace(/^\/+/, '')}`; // loại bỏ '/' đầu nếu có
    setLocaleHref(localized);
  }, [href]);

  return <Link href={localeHref} {...props}>{children}</Link>;
};

export default ILink;
