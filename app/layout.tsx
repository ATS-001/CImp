import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GlobalLoading from '@/components/GlobalLoading';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Cimp - C Programming Guide',
  description: 'Comprehensive C programming guide covering KTU 2024 syllabus topics including storage classes, structures, memory allocation, file handling, and more.',
  openGraph: {
    title: 'Cimp - C Programming Guide',
    description: 'Comprehensive C programming guide covering KTU 2024 syllabus topics.',
    url: 'https://cimp.vercel.app',
    siteName: 'Cimp',
    images: [
      {
        url: 'https://picsum.photos/seed/cimp/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900" suppressHydrationWarning>
        <Suspense fallback={null}>
          <GlobalLoading />
        </Suspense>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
