import { Inter } from 'next/font/google';
import './_app/globals.scss';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
        <main className={`${inter.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    </SessionProvider>
  );
}
