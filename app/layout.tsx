import 'bootstrap/dist/css/bootstrap.min.css'
import localFont from 'next/font/local'
import AddBootstrap from './AddBootstrap'
import './styles/globals.scss'
import { ReduxProvider } from './redux/provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AddBootstrap />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
