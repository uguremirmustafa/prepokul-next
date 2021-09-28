import '../styles/main.scss';
import { UserProvider } from '@auth0/nextjs-auth0';
import client from '../lib/sanityClient';
import { useEffect, useState } from 'react';
import { allBlogCategories } from '../lib/queries/allBlogCategories';
import Layout from '../layouts/Layout';
import { allActivityCategories } from '../lib/queries/allActivityCategories';
import { AppProvider } from '../context/AppContext';
function MyApp({ Component, pageProps }) {
  const [blogCategories, setBlogCategories] = useState([]);
  const [activityCategories, setActivityCategories] = useState([]);
  const getAllCategoryNames = async () => {
    const data = await client.fetch(allBlogCategories);
    const data2 = await client.fetch(allActivityCategories);

    setBlogCategories(data);
    setActivityCategories(data2);
  };

  useEffect(() => {
    getAllCategoryNames();
  }, []);
  return (
    <AppProvider>
      <UserProvider>
        <Layout blogCategories={blogCategories} activityCategories={activityCategories}>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </AppProvider>
  );
}

export default MyApp;
