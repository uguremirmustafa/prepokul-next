import React from 'react';
import Navbar from '../components/Navbar';
import Container from './Container';

const Layout = ({ blogCategories, activityCategories, children }) => {
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
