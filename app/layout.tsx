import './globals.css';
import { Noto_Serif_HK, Open_Sans } from '@next/font/google';

const notoSerifHK = Noto_Serif_HK({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-noto-serif',
});

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const fontClassNames = `${notoSerifHK.variable} ${openSans.variable}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassNames}>
      <head />
      <body className="bg-sand text-dark-grey antialiased">{children}</body>
    </html>
  );
}
