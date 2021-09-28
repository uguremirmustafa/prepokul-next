import '../styles/main.scss';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../layouts/Layout';
import { AppProvider } from '../context/AppContext';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <UserProvider>
        <Layout
        // blogCategories={blogCategories} activityCategories={activityCategories}
        >
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </AppProvider>
  );
}

export default MyApp;
