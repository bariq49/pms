import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Pak Mobile Store - Tu Tienda de Móviles Libres',
  description: 'Tienda de móviles libres y accesorios para teléfonos, smartphones y tablets. Compra online con pago a plazos opcional y envío desde 24 horas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', () => {
                document.body.removeAttribute('data-new-gr-c-s-check-loaded');
                document.body.removeAttribute('data-gr-ext-installed');
              });
            `,
          }}
        />
      </body>
    </html>
  );
}