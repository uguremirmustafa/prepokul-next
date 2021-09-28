import React from 'react';
import client from '../../../lib/sanityClient';
import { allPostPaths } from '../../../lib/queries/allPostPaths';
import { allPostsUnderCategory } from '../../../lib/queries/allPostsUnderCategory';
import SectionTitle from '../../../components/SectionTitle';
import BlogCard from '../../../components/BlogCard';
// import { useNextSanityImage } from 'next-sanity-image';
// import Image from 'next/image';
// import Link from 'next/link';
// import { formatDate } from '../../../utils/date-formatter';
// import { config } from '../../../lib/sanityConfig';

const Blog = ({ data }) => {
  // const image = useNextSanityImage(client, post.mainImage);
  // const avatar = useNextSanityImage(client, post.author.image);

  return (
    <>
      {data && (
        <div>
          <SectionTitle>{data.title}</SectionTitle>
          <div className="blog-container">
            {data.posts.map((post, index) => (
              <BlogCard index={index} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const data = await client.fetch(allPostsUnderCategory, { slug: context.params.slug });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await client.fetch(allPostPaths);

  const paths = await slugs.map((slug) => ({ params: slug }));
  return {
    paths,
    fallback: true,
  };
}
