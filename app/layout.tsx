import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Avança — Seu corre, sua vida, sua vez',
  description:
    'App para motoristas e entregadores de aplicativos acompanharem ganhos reais, despesas e metas financeiras. Funciona com Uber, 99, iFood, Rappi e Keeta.',
  metadataBase: new URL('https://avanca.app'),
  openGraph: {
    title: 'Avança — Seu corre, sua vida, sua vez',
    description:
      'Você entrega horas e horas. Mas sabe o quanto sobrou? A Avança mostra o que você realmente ganhou.',
    url: 'https://avanca.app',
    siteName: 'Avança',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avança — Seu corre, sua vida, sua vez',
    description: 'App para entregadores acompanharem ganhos reais e metas financeiras.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="bg-preto text-branco antialiased font-sans">{children}</body>
    </html>
  )
}
