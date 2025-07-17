import dynamic from "next/dynamic";

export const DevOnlyDownload = process.env.NODE_ENV !== "production"
  ? dynamic(() => import('@/app/[lang]/download-book/DownloadBookPage'))
  : () => null;