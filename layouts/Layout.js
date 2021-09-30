import Navbar from '../components/Navbar';
import Container from './Container';
import client from '../lib/sanityClient';
import { allBlogCategories } from '../lib/queries/allBlogCategories';
import { allActivityCategories } from '../lib/queries/allActivityCategories';
import { useQuery } from 'react-query';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const Layout = ({ children }) => {
  const router = useRouter();
  const { data: blogCategories } = useQuery('blogCat', async () => client.fetch(allBlogCategories));
  const { data: activityCategories } = useQuery('actvityCat', async () =>
    client.fetch(allActivityCategories)
  );

  const contentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div>
      <Container>
        <Navbar blogCategories={blogCategories} activityCategories={activityCategories} />
        <motion.main
          key={router.asPath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={contentVariants}
        >
          {children}
        </motion.main>
        <Footer blogCategories={blogCategories} activityCategories={activityCategories} />
      </Container>
    </div>
  );
};

export default Layout;
