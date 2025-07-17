// components/LanguageSwitcher.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'

const locales = ['en', 'vi']

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname() || '/'

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale // replace the locale in URL
    const newPath = segments.join('/')
    router.push(newPath)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
}

  return (
    <div className="top-right">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLanguage(loc)}
          className="px-3 py-1 rounded hover:bg-gray-100 transition-all border border-gray-300 text-sm font-medium"
        >
          {loc === 'en' ? '🇬🇧' : '🇻🇳'}
        </button>
      ))}
    </div>
  )
}