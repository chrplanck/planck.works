import './globals.css';
import { Playfair_Display, Open_Sans } from '@next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const fontClassNames = `${openSans.variable} ${playfairDisplay.variable}`;

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
