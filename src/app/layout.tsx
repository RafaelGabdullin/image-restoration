import { StoreProvider } from '@/stores/StoreProvider'
import './styles/globals.css'
import { InitialState } from '@/stores/RootStore/RootStore'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const initialState: InitialState = {
  userStore: {},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider initialState={initialState}>
          <div className="h-screen w-screen">{children}</div>
        </StoreProvider>
      </body>
    </html>
  )
}
