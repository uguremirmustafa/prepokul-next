import Navbar from '../components/Navbar';
import Container from './Container';
import client from '../lib/sanityClient';
import { useEffect, useState } from 'react';
import { allBlogCategories } from '../lib/queries/allBlogCategories';
import { allActivityCategories } from '../lib/queries/allActivityCategories';
const Layout = ({ children }) => {
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
    <div>
      <Container>
        <Navbar blogCategories={blogCategories} activityCategories={activityCategories} />
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
