import { Metadata } from 'next';
import './globals.css';

import Header from '@/components/header/page';

export const metadata: Metadata = {
  title: {
    default: '',
    template: '%s - Viviane Monteiro'
  },
  description: 'Viviane Monteiro nutrição e derivados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className='antialiased'
      >
        <div>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
