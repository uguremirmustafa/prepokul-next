import { useNextSanityImage } from 'next-sanity-image';
import React, { useState } from 'react';
import client from '../lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { formatDate } from '../utils/date-formatter';
import CalendarIcon from './svgs/calendarIcon';

const BlogCard = ({ post, index }) => {
  const { active, setActive } = useApp();
  const postImage = useNextSanityImage(client, post.mainImage);
  const postDate = formatDate(post.publishedAt);
  const [transformOrigin, setTransformOrigin] = useState('');
  const [x, setX] = useState('+');
  const [y, setY] = useState('+');

  const animateCard = () => {
    switch (index) {
      case 0:
        setTransformOrigin('top left');
        setX('+100px');
        setY('+100px');
        break;
      case 1:
        setTransformOrigin('top center');
        setX('0px');
        setY('+100px');
        break;
      case 2:
        setTransformOrigin('top right');
        setX('-100px');
        setY('+100px');
        break;
      case 3:
        setTransformOrigin('bottom left');
        setX('+100px');
        setY('-100px');
        break;
      case 4:
        setTransformOrigin('bottom center');
        setX('0px');
        setY('-100px');
        break;
      case 5:
        setTransformOrigin('bottom right');
        setX('-100px');
        setY('-100px');
        break;

      default:
        break;
    }
    if (active === -1) {
      setActive(index);
    }
    if (active === index) {
      setActive(-1);
    }
  };

  const variants = {
    animate: {
      scale: 1.6,
      x,
      y,
      zIndex: 2,
      transformOrigin,
      transition: { duration: 0.5, type: 'spring' },
    },
    exit: {
      scale: 1,
      transformOrigin,
      transition: {
        zIndex: -1,
        duration: 0.4,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      onClick={() => animateCard()}
      variants={variants}
      animate={active === index ? 'animate' : 'exit'}
      className={`blog-card`}
    >
      <div className="content">
        <span className="date">
          <CalendarIcon />
          {postDate}
        </span>
        <h2>
          {post.title}-{index}
        </h2>
        {active !== index && <span className="category-name">{post.categoryName}</span>}
        {active === index && (
          <>
            <p className="excerpt">{post.excerpt}</p>
            <span>
              <Link href={`/blog/${post.slug.current}`}>devamını oku</Link>
            </span>
          </>
        )}
      </div>
      <div className="wrapper">
        <Image src={postImage.src} loader={postImage.loader} layout="fill" objectFit="cover" />
        <div className="filter"></div>
      </div>
    </motion.div>
  );
};

export default BlogCard;