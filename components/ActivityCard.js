import { useNextSanityImage } from 'next-sanity-image';
import React from 'react';
import client from '../lib/sanityClient';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

const ActivityCard = ({ activity }) => {
  const { user, error, isLoading } = useUser();
  const image = useNextSanityImage(client, activity.image);

  return (
    <div className="activity-card">
      <h2>{activity.title}</h2>
      <div className="wrapper">
        <Image
          src={image.src}
          loader={image.loader}
          quality={70}
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          layout="fill"
          objectFit="cover"
        />
        <div className="filter"></div>
      </div>
      {isLoading && (
        <a className="download btn" href="#">
          yükleniyor...
        </a>
      )}
      {user ? (
        <a
          className="download btn"
          href={`${activity.file}?dl`}
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf indir
        </a>
      ) : (
        <Link href="/api/auth/login">
          <span className="btn download">hemen indir</span>
        </Link>
      )}
    </div>
  );
};

export default ActivityCard;
