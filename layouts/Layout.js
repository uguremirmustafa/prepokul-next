import Navbar from '../components/Navbar';
import Container from './Container';
import client from '../lib/sanityClient';
import { useEffect, useState } from 'react';
import { allBlogCategories } from '../lib/queries/allBlogCategories';
import { allActivityCategories } from '../lib/queries/allActivityCategories';
import { useQuery } from 'react-query';
const Layout = ({ children }) => {
  const { data: blogCategories } = useQuery('blogCat', async () => client.fetch(allBlogCategories));
  const { data: activityCategories } = useQuery('actvityCat', async () =>
    client.fetch(allActivityCategories)
  );

  return (
    <div>
      <Container>
        <Navbar blogCategories={blogCategories} activityCategories={activityCategories} />
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
