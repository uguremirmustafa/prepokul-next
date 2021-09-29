import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ArrowLeft from '../components/svgs/arrowLeft';
import ArrowRight from '../components/svgs/arrowRight';
import InstagramIcon from './svgs/instagramIcon';
import PinterestIcon from './svgs/pinterestIcon';
import TwitterIcon from './svgs/twitterIcon';

const variants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  exit: {
    x: 500,
    opacity: 0,
  },
};

const NavMenu = ({ blogCategories, activityCategories }) => {
  const [blogActive, setBlogActive] = useState(false);
  const [activityActive, setActivityActive] = useState(false);

  const social = {
    instagram: 'https://www.instagram.com/prepokul/',
    twitter: '',
    pinterest: 'https://tr.pinterest.com/prepokul/',
  };
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="navmenu"
    >
      <ul>
        <li className="blog-link" onClick={() => setBlogActive(!blogActive)}>
          {blogActive ? (
            <span>
              <ArrowLeft /> geri
            </span>
          ) : (
            <>
              {!activityActive && (
                <span>
                  Blog <ArrowRight />
                </span>
              )}
            </>
          )}
          <AnimatePresence exitBeforeEnter>
            {blogActive && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                // className="blogMenu"
              >
                <ul className="blog-cat">
                  <li>
                    {/* <BlogIcon /> */}
                    <span>
                      <Link href="/blog">Tümünü gör</Link>
                    </span>
                  </li>
                  {blogCategories.map((cat) => (
                    <li key={cat._id}>
                      {/* <BlogIcon /> */}
                      <span>
                        <Link href={`/blog/kategoriler/${cat.slug.current}`}>{cat.title}</Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        <li
          className="activity-link"
          onClick={() => {
            setActivityActive(!activityActive);
          }}
        >
          {activityActive ? (
            <span>
              <ArrowLeft /> geri
            </span>
          ) : (
            <>
              {!blogActive && (
                <span>
                  Etkinlikler <ArrowRight />
                </span>
              )}
            </>
          )}
          <AnimatePresence exitBeforeEnter>
            {activityActive && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}

                // className="activityMenu"
              >
                <ul className="activity-cat">
                  <li>
                    {/* <CategoryIcon /> */}
                    <span>
                      <Link href="/etkinlikler">Tümünü gör</Link>
                    </span>
                  </li>
                  {activityCategories.map((cat) => (
                    <li key={cat._id}>
                      {/* <CategoryIcon /> */}
                      <span>
                        <Link href={`/etkinlikler/kategoriler/${cat.slug.current}`}>
                          {cat.title}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        {!blogActive && !activityActive && (
          <>
            <li>
              <Link href="/hakkimda">Hakkımda</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </>
        )}
      </ul>
      <div className="credits">
        <div className="logos">
          <a
            aria-label="Instagram Icon"
            target="_blank"
            rel="noopener noreferrer"
            href={social.instagram}
          >
            <InstagramIcon />
          </a>
          <a
            aria-label="Pinterest Icon"
            target="_blank"
            rel="noopener noreferrer"
            href={social.pinterest}
          >
            <PinterestIcon />
          </a>
          <a
            aria-label="Twitter Icon"
            target="_blank"
            rel="noopener noreferrer"
            href={social.twitter}
          >
            <TwitterIcon />
          </a>
        </div>
        <div className="sign">
          <p> prepokul &#169; {new Date().getFullYear()}</p>
          <p style={{ fontSize: '.7rem', marginTop: '1rem' }}>
            developed and designed by
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://devugur.com"
              style={{ marginLeft: '.2rem', fontWeight: 'bold' }}
            >
              devugur
            </a>
          </p>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavMenu;
