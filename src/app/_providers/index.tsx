
import { ReactQueryProvider } from './react-query'
import { AOSProvider } from './aos'
import ProgressBarProvider from './progress-bar'
import AuthSync from '@/components/auth/AuthSync'
import { SiteSettingsProvider } from './site-settings'

export type LayoutProps = Readonly<{
  children: React.ReactNode
}>

export function Providers({ children }: LayoutProps) {
  return (
    <ReactQueryProvider>
      <AOSProvider>
        <AuthSync />
        <SiteSettingsProvider />
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </AOSProvider>
    </ReactQueryProvider>
  )
}
