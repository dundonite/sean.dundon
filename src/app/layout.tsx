export const metadata = {
  title: 'Sean Dundon',
  description: 'Sean Dundon\s Personal Website',
}

import './globals.css'
import Header from "./components/header.tsx"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children}
      </body>
    </html>
  )
}
