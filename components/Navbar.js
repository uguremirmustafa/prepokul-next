import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import BlogIcon from './svgs/blogIcon';
import CategoryIcon from './svgs/categoryIcon';
import HamburgerIcon from './svgs/hamburgerIcon';
import { AnimatePresence, motion } from 'framer-motion';
import NavMenu from './NavMenu';
import { useRouter } from 'next/router';
import InstagramIcon from './svgs/instagramIcon';
import Router from 'next/router';

const dropdownVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeIn', type: 'spring' },
  },
};

const Navbar = ({ blogCategories, activityCategories }) => {
  const { user, error, isLoading } = useUser();
  const [blogActive, setBlogActive] = useState(false);
  const [activityActive, setActivityActive] = useState(false);
  const [open, setOpen] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setOpen(false);
    setActivityActive(false);
    setActivityActive(false);
  });

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/">
          <div className="logo">
            <img src="/logo.png" alt="prepokul logo" />
            Prepokul
          </div>
        </Link>

        <span className="etkinlikler-link">
          <Link href="/etkinlikler">Etkinlikler</Link>
          <a className="instagram-icon" href="https://instagram.com/prepokul">
            <InstagramIcon />
          </a>
        </span>

        <ul>
          <li
            className="blog-link"
            onMouseEnter={() => setBlogActive(true)}
            onMouseLeave={() => setBlogActive(false)}
          >
            <span>Blog</span>
            <AnimatePresence>
              {blogActive && (
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={dropdownVariants}
                  className="blogMenu"
                >
                  <ul className="blog-categories">
                    <li>
                      <BlogIcon />
                      <span>
                        <Link href="/blog">Tümünü gör</Link>
                      </span>
                    </li>
                    {blogCategories.map((cat) => (
                      <li key={cat._id}>
                        <BlogIcon />
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
            onMouseEnter={() => setActivityActive(true)}
            onMouseLeave={() => setActivityActive(false)}
          >
            <span>Etkinlikler</span>
            <AnimatePresence>
              {activityActive && (
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={dropdownVariants}
                  className="activityMenu"
                >
                  <ul className="activity-categories">
                    <li>
                      <CategoryIcon />
                      <span>
                        <Link href="/etkinlikler">Tümünü gör</Link>
                      </span>
                    </li>
                    {activityCategories.map((cat) => (
                      <li key={cat._id}>
                        <CategoryIcon />
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
          <li>
            <Link href="/hakkimda">Hakkımda</Link>
          </li>
          <li>
            <Link href="/iletisim">İletişim</Link>
          </li>
        </ul>
        {isLoading && <button className="btn loading">yükleniyor...</button>}
        {!isLoading && !user && (
          <Link href="/api/auth/login">
            <button className="btn login">giriş</button>
          </Link>
        )}
        {!isLoading && error && (
          <Link href="/api/auth/login">
            <button className="btn login">!</button>
          </Link>
        )}
        {user && (
          <div className="user">
            <span>{user.name}</span>
            <Link href="/api/auth/logout">
              <button className="btn logout color-blue">çıkış</button>
            </Link>
          </div>
        )}

        <motion.div
          whileTap={{ scale: [0.8, 1.2, 1], transition: { duration: 0.4 } }}
          className={`hamburger ${open ? 'openHamburger' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <HamburgerIcon />
        </motion.div>
      </nav>
      {open && <NavMenu blogCategories={blogCategories} activityCategories={activityCategories} />}
    </header>
  );
};

export default Navbar;
