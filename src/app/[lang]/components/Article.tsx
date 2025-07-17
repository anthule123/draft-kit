'use client'
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import style from '@/css/components/article.module.css';

type Heading = {
  id: string;
  text: string;
  level: number;
};

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children, className, ...props }) => {
  const articleRef = useRef<HTMLElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (!articleRef.current) return;

    const headingElements = articleRef.current.querySelectorAll('h1, h2, h3');

    const newHeadings: Heading[] = [];
    headingElements.forEach((el, idx) => {
      if (!el.id) {
        el.id = `heading-${idx}`;
      }
      newHeadings.push({
        id: el.id,
        text: el.textContent || '',
        level: Number(el.tagName.charAt(1)),
      });
    });

    setHeadings(newHeadings);
  }, [children]); // đảm bảo cập nhật khi nội dung thay đổi

  return (
    <div className={`$ ${style.container}`}>
      <LanguageSwitcher />
      <article ref={articleRef} className={className} {...props}>
        {children}
      </article>
      <nav className={style.toc}>
        <h3>Mục lục bài viết</h3>
        <ul>
          {headings.map(({ id, text, level }) => (
            <li key={id} style={{ marginLeft: (level - 1) * 20 }}>
              <a href={`#${id}`}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>

      
    </div>
  );
};

export default Article;