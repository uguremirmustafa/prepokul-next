import React from 'react';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';
const MorePosts = ({ posts }) => {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <SectionTitle>Benzer Yazılar</SectionTitle>
      </div>
      <div className="more-posts">
        {posts.map((post, index) => (
          <BlogCard post={post} index={index === 0 ? 3 : 5} />
        ))}
      </div>
    </>
  );
};

export default MorePosts;
