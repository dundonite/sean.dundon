import type { Metadata } from 'next';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Sean Dundon',
  description: "Sean Dundon's Professional Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
