import React from 'react';
import client from '../lib/sanityClient';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { formatDate } from '../utils/date-formatter';
import CalendarIcon from './svgs/calendarIcon';
import Link from 'next/link';

const Hero = ({ posts }) => {
  const heroPost = posts[0];
  const highlihtedPosts = posts.slice(1, 5);
  const heroImage = useNextSanityImage(client, heroPost.mainImage);

  return (
    <div className="hero">
      <div className="heroPost">
        <div className="content">
          <h2>{heroPost.title}</h2>
          <p>{heroPost.categoryName}</p>
          <span>
            <CalendarIcon />
            {formatDate(heroPost.publishedAt)}
          </span>
        </div>
        <div className="imageWrapper">
          <Image src={heroImage.src} loader={heroImage.loader} layout="fill" objectFit="cover" />
          <div className="filter"></div>
        </div>
      </div>
      <div className="highlightedPosts">
        {highlihtedPosts.map((post) => {
          const postImage = useNextSanityImage(client, post.mainImage);
          return (
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>
              <div>
                <div className="content">
                  <span>
                    <CalendarIcon />
                    {formatDate(post.publishedAt)}
                  </span>
                  <h2>{post.title}</h2>
                </div>
                <div className="wrapper">
                  <Image
                    src={postImage.src}
                    loader={postImage.loader}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="filter"></div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
