import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeShellExtras from './HomeShellExtras';
import TrackingSnippets from './components/TrackingSnippets';
import theme from './theme';
import './globals.css';
import ClientI18nProvider from './ClientI18nProvider';
import CookieConsent from './components/CookieConsent';

export const metadata = {
  title: 'Sweden Relocators',
  description: 'Relocate to Sweden with expert advice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientI18nProvider>
              <TrackingSnippets />
              <Navbar />
              {children}
              <HomeShellExtras />
              <Footer />
              <CookieConsent />
            </ClientI18nProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
