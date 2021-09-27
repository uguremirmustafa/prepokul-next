import { useNextSanityImage } from 'next-sanity-image';
import React from 'react';
import client from '../lib/sanityClient';
import Image from 'next/image';

const ActivityCard = ({ activity }) => {
  console.log(activity);
  const image = useNextSanityImage(client, activity.image);

  return (
    <div className="activity-card">
      <h2>{activity.title}</h2>
      <div className="wrapper">
        <Image src={image.src} loader={image.loader} layout="fill" objectFit="cover" />
        <div className="filter"></div>
      </div>
      <a
        className="download btn"
        href={`${activity.file}?dl`}
        target="_blank"
        rel="noopener noreferrer"
      >
        pdf indir
      </a>
    </div>
  );
};

export default ActivityCard;
