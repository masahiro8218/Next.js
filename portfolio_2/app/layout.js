import { M_PLUS_1 } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const mPlus1 = M_PLUS_1({
  subsets: ['latin'],
  variable: '--font-m-plus-1',
});

export const metadata = {
  title: 'ORIGIN.Dogゼミ',
  description: 'ORIGIN.Dogゼミのポートフォリオサイトです。',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <body className={`${mPlus1.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
