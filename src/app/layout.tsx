import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ReduxProvider>
            {children}
            <Toaster richColors position='top-right' />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
