import React from 'react';
import client from '../lib/sanityClient';
import { activities } from '../lib/queries/activities';
import ActivityCard from '../components/ActivityCard';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
const Activities = ({ activitiesData, count }) => {
  return (
    <div>
      {activitiesData && (
        <>
          <SEO
            title="Okul öncesi etkinlikler"
            date={activitiesData[0].publishedAt}
            // keywords={[...new Set(data.activities.map((act) => [...act.keywords]))]}
            excerpt={`Çeşitli kategorilerdeki okul öncesi etkinliklerini indir.`}
          />
          <div className="activities-container">
            {activitiesData.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
          <Pagination type="etkinlikler" count={count} />
        </>
      )}
    </div>
  );
};

export default Activities;

export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate');
  let { start, end, perPage } = context.query;
  if (!perPage) {
    perPage = 10;
  }
  if (!start) {
    start = 0;
  }
  if (!end) {
    end = perPage;
  }

  const { activities: activitiesData, count } = await client.fetch(activities, {
    start: parseInt(start),
    end: parseInt(end),
  });
  return {
    props: {
      activitiesData,
      count,
      perPage,
    },
  };
}
