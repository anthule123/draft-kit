'use client'
import { FormState } from "@/types/form";
import { useActionState } from "react";
import bookAction from "./bookAction";

// app/download-book/page.tsx
export default  function DownloadBookPage() {
  
  const initialState: FormState = {
    error: undefined,
    success: false,
    message: undefined,
  };
  const [state, formAction] = useActionState(
    bookAction,
    initialState,
  );
  
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Download Doc/Tutorial/Draft Book</h1>
        <p>Làm thêm tính năng tạo sách.</p>
        <form action={formAction}>
          <button type='submit'>Tạo sách</button>
        </form>
        <a
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
  