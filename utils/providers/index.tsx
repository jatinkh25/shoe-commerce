'use client'

import ReactQueryProvider from './ReactQueryProvider'
import ReduxProvider from './ReduxProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  )
}
