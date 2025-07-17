import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from "next/server";

let locales = ['vi', 'en'] 

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
   
    if (pathnameHasLocale) return
   
    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
  }
   
  export const config = {
    matcher: [
      // Skip all internal paths (_next)
      '/((?!_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }
// Function to get the best matched locale
function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if(cookieLocale) return cookieLocale;
  let headers = { 'accept-language': 'vi;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
 
  let defaultLocale = 'vi'
    return match(languages, locales, defaultLocale)
  }