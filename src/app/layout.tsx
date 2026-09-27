import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOHead from '../components/SEOHead';

export const metadata: Metadata = {
  title: 'Landing Pages Monoproducto para Empresas de Energía Solar | Servicio de Marketing Digital',
  description: 'Convierte tus clics de Google y Meta Ads en proyectos fotovoltaicos reales de €5.000 a €15.000 con una landing monoproducto ultrarrápida y filtro anti-curiosos.',
  keywords: [
    'landing page energia solar',
    'landing monoproducto fotovoltaica',
    'marketing instaladores placas solares',
    'embudo de ventas autoconsumo',
    'CRO instaladores solares',
    'captacion clientes placas solares',
  ],
  authors: [{ name: 'Servicio de Marketing Digital', url: 'https://serviciodemarketingdigital.com' }],
  metadataBase: new URL('https://landing-01-solar.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Landing Pages Monoproducto para Empresas de Energía Solar',
    description: 'Vende tu servicio de placas solares con una landing monoproducto de alta velocidad y filtro anti-curiosos.',
    url: 'https://landing-01-solar.vercel.app',
    siteName: 'Servicio de Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Servicio de Marketing Digital - Landing Pages Monoproducto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages Monoproducto para Instaladores Fotovoltaicos',
    description: 'Multiplica el ROAS de tus campañas de placas solares con embudos de venta de carga ultrarrápida.',
    images: ['/LOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className="bg-brand-dark text-slate-100 min-h-screen selection:bg-amber-500 selection:text-slate-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
