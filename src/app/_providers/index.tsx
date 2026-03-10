
import { ReactQueryProvider } from './react-query'
import { AOSProvider } from './aos'
import ProgressBarProvider from './progress-bar'
import AuthSync from '@/components/auth/AuthSync'

export type LayoutProps = Readonly<{
  children: React.ReactNode
}>

export function Providers({ children }: LayoutProps) {
  return (
    <ReactQueryProvider>
      <AOSProvider>
        <AuthSync />
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </AOSProvider>
    </ReactQueryProvider>
  )
}
