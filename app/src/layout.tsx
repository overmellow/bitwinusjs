import { UserContextProvider } from "@/contexts/user"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
        {children}
        </UserContextProvider>
      </body>
    </html>
  )
}
