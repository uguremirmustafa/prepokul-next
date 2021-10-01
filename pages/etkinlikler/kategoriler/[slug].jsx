import React from 'react';
import client from '../../../lib/sanityClient';
import { allActivityCategories } from '../../../lib/queries/allActivityCategories';
import { allActivitiesUnderCategory } from '../../../lib/queries/allActivitiesUnderCategory';
import SectionTitle from '../../../components/SectionTitle';
import ActivityCard from '../../../components/ActivityCard';
import SEO from '../../../components/SEO';

const Blog = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <SEO
            date={data.activities[0].publishedAt}
            keywords={[
              ...new Set(
                data.activities.map((act) => {
                  if (act.keywords) {
                    return [...act.keywords];
                  } else {
                    return act.title;
                  }
                })
              ),
            ]}
            title={data.title}
            excerpt={`${data.title} okul öncesi etkinlikleri`}
          />
          <div className="">
            <SectionTitle>{data.title}</SectionTitle>
            <div className="activities-container">
              {data.activities.map((activity, index) => (
                <ActivityCard activity={activity} key={index} index={index} />
              ))}
            </div>
          </div>
        </>
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

  return {
    paths,
    fallback: true,
  };
}
