import React from 'react';
import client from '../../../lib/sanityClient';
import { allActivityCategories } from '../../../lib/queries/allActivityCategories';
import { allActivitiesUnderCategory } from '../../../lib/queries/allActivitiesUnderCategory';
import SectionTitle from '../../../components/SectionTitle';
import ActivityCard from '../../../components/ActivityCard';

const Blog = ({ data }) => {
  return (
    <>
      {data && (
        <div className="">
          <SectionTitle>{data.title}</SectionTitle>
          <div className="activities-container">
            {data.activities.map((activity) => (
              <ActivityCard activity={activity} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const data = await client.fetch(allActivitiesUnderCategory, { slug: context.params.slug });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await client.fetch(allActivityCategories);
  const paths = await slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
  //   console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
