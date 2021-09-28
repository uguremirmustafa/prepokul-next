import React from 'react';
import client from '../lib/sanityClient';
import { posts } from '../lib/queries/posts';
import BlogCard from '../components/BlogCard';

const Blog = ({ postsData }) => {
  return (
    <div>
      {postsData && (
        <div className="blog-container">
          {postsData.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate');
  let { start, end } = context.query;

  if (!start) {
    start = 0;
  }
  if (!end) {
    end = 6;
  }

  const postsData = await client.fetch(posts, { start: parseInt(start), end: parseInt(end) });
  return {
    props: {
      postsData,
    },
  };
}
