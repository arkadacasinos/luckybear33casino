import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'
import './landing.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://luckybear33casino.vercel.app'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e4d3b" />
        <title>
          LuckyBear Casino — официальный сайт и зеркало | Лаки Бир казино онлайн
        </title>
        <meta
          name="description"
          content="LuckyBear Casino — официальный сайт и рабочее зеркало. Лаки Бир казино онлайн: регистрация, бонусы и быстрые выплаты. Играйте безопасно на LuckyBear казино."
        />
        <meta
          name="keywords"
          content="lucky bear casino, luckybear casino зеркало, luckybear casino официальный сайт, лаки бир казино онлайн, лаки бир казино зеркало, лаки бир казино официальный сайт, lucky bear casino зеркало, lucky bear casino официальный сайт, luckybear casino онлайн, luckybear casino регистрация, luckybear casino бонусы"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="LuckyBear Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="LuckyBear Casino — официальный сайт и зеркало"
        />
        <meta
          property="og:description"
          content="Лаки Бир казино онлайн: регистрация, бонусы и быстрые выплаты. Официальный сайт и рабочее зеркало LuckyBear Casino."
        />
        <meta property="og:image" content={`${SITE_URL}/images/hero-bear.jpg`} />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="LuckyBear Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LuckyBear Casino — официальный сайт и зеркало"
        />
        <meta
          name="twitter:description"
          content="Лаки Бир казино онлайн: регистрация, бонусы и быстрые выплаты."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero-bear.jpg`} />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
