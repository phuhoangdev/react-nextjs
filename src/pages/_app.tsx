import '@/styles/globals.css';
import { EmptyLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models';
import axiosClient from '@/apiClient/axiosClient';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache, theme } from '@/utils/index';
import '@/styles/prism.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
   const Layout = Component.Layout ?? EmptyLayout;

   return (
      <CacheProvider value={emotionCache}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </SWRConfig>
         </ThemeProvider>
      </CacheProvider>
   );
}
