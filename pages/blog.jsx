import React from 'react';
import client from '../lib/sanityClient';
import { posts } from '../lib/queries/posts';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';

const Blog = ({ postsData, count }) => {
  return (
    <div>
      {postsData && (
        <div className="blog-container">
          {postsData.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      )}
      <Pagination type="blog" count={count} />
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate');
  let { start, end, perPage } = context.query;
  if (!perPage) {
    perPage = 6;
  }
  if (!start) {
    start = 0;
  }
  if (!end) {
    end = perPage;
  }
  const { posts: postsData, count } = await client.fetch(posts, {
    start: parseInt(start),
    end: parseInt(end),
  });
  return {
    props: {
      postsData,
      count,
    },
  };
}
