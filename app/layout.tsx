import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import ModalProvider from '@/components/ModalProvider';
import CrispProvider from '@/components/CrispProvider';

const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Worldview',
  description: 'View hundreds of statistics from countries all over the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider/>
        <body className={`${montserrat.className} relative`}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
