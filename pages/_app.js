import '../styles/main.scss';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../layouts/Layout';
import { AppProvider } from '../context/AppContext';
import { QueryClient, QueryClientProvider } from 'react-query';
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
