import React from 'react';
import { getClient, usePreviewSubscription, PortableText } from '../lib/sanityClient';
import { useRouter } from 'next/router';
import { heroPosts } from '../lib/queries/heroPosts';
import { latestActivities } from '../lib/queries/latestActivities';
import { posts } from '../lib/queries/posts';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import BlogCard from '../components/BlogCard';
import SectionTitle from '../components/SectionTitle';
import ReadOthers from '../components/ReadOthers';
const Home = (props) => {
  const router = useRouter();
  const { postdata, preview, activitiesData, latestPosts } = props;

  const { data: heroPostsData } = usePreviewSubscription(heroPosts, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  const { data: latestActivitiesData } = usePreviewSubscription(latestActivities, {
    initialData: activitiesData,
    enabled: preview || router.query.preview !== undefined,
  });
  console.log(latestPosts);

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
      <ReadOthers text="Diğer etkinlikleri indir &raquo;" href="/etkinlikler" />
      <SectionTitle>Son Yazılar</SectionTitle>
      <div className="blogs">
        {latestPosts && latestPosts.map((post, index) => <BlogCard index={index} post={post} />)}
      </div>
      <ReadOthers text="Diğer yazılarıma gözat &raquo;" href="/blog" />
    </div>
  );
};

export default Home;
export async function getStaticProps({ params, preview = false }) {
  const postsData = await getClient(preview).fetch(heroPosts);
  const activitiesData = await getClient(preview).fetch(latestActivities);
  const { posts: latestPosts, count } = await getClient(preview).fetch(posts, {
    start: 4,
    end: 10,
  });

  return {
    props: {
      postdata: postsData,
      preview,
      activitiesData,
      latestPosts,
      count,
    },
    revalidate: 10,
  };
}
