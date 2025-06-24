

import { DevOnlyDownload } from "@/app/components/DevOnlyDownload";

export default async  function Page() {

  if(process.env.NODE_ENV !== "production")
    return <DevOnlyDownload/>
  else 
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Download Doc/Tutorial/Draft Book</h1>
        <p className="">Kết nối tất cả các bài 
          viết lại thành 1 quyển sách.
        </p>
        <a
        //   href="/blog-book.pdf"
        href='/book.pdf'  
        download
          style={{
            padding: '1rem 2rem',
            background: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '1rem',
          }}
        >
          📘 Download PDF Book
        </a>
      </div>
    );
  }
  