import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConnectingTalentSection from './components/ConnectingTalentSection';
import PayrollEORSection from './components/PayrollEORSection';
import BusinessMarketplaceSection from './components/BusinessMarketplaceSection';
import RelocationSuccessSection from './components/RelocationSuccessSection';
import BlogsSection from './components/BlogsSection';
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
              <Navbar />
              {children}
              <ConnectingTalentSection />
              <PayrollEORSection />
              <BusinessMarketplaceSection />
              <RelocationSuccessSection />
              <BlogsSection />
              <Footer />
              <CookieConsent />
            </ClientI18nProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
