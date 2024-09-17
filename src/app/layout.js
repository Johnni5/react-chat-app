import { Inria_Sans } from 'next/font/google'

const inria = Inria_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inria.className}>
      <head>
        <title>Epic Chat</title>
      </head>
      <body>
        <h1>HEELLOOO</h1>
        {children}
      </body>
    </html>

  ); 
}

