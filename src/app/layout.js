import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation';
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'My first App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

