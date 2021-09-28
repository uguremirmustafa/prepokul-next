import React from 'react';
import { getClient, usePreviewSubscription, PortableText } from '../lib/sanityClient';
import { useRouter } from 'next/router';
import { heroPosts } from '../lib/queries/heroPosts';
import { latestActivities } from '../lib/queries/latestActivities';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import SectionTitle from '../components/SectionTitle';

const Home = (props) => {
  const router = useRouter();
  const { postdata, preview, activitiesData } = props;

  const { data: heroPostsData } = usePreviewSubscription(heroPosts, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  const { data: latestActivitiesData } = usePreviewSubscription(latestActivities, {
    initialData: activitiesData,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <div>
      {heroPostsData && <Hero posts={heroPostsData} />}
      <SectionTitle>Son Etkinlikler</SectionTitle>
      <div className="activities">
        {latestActivitiesData &&
          latestActivitiesData.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
      </div>
    </div>
  );
};

export default Home;
export async function getStaticProps({ params, preview = false }) {
  const postsData = await getClient(preview).fetch(heroPosts);
  const activitiesData = await getClient(preview).fetch(latestActivities);

  return {
    props: {
      postdata: postsData,
      preview,
      activitiesData,
    },
    revalidate: 10,
  };
}
