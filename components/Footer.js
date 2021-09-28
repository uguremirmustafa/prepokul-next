import React from 'react';
import Link from 'next/link';
import InstagramIcon from './svgs/instagramIcon';
import PinterestIcon from './svgs/pinterestIcon';
import TwitterIcon from './svgs/twitterIcon';
const Footer = ({ blogCategories, activityCategories }) => {
  const social = {
    instagram: '',
    twitter: '',
    pinterest: '',
  };
  return (
    <footer className="footer">
      <div className="column-blog">
        <h4>Blog Kategorileri</h4>
        <ul>
          {blogCategories?.map((cat) => (
            <li>
              <Link href={`/blog/kategoriler/${cat.slug.current}`}>{cat.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="column-activity">
        <h4>Etkinlik Kategorileri</h4>
        <ul>
          {activityCategories?.map((cat) => (
            <li>
              <Link href={`/etkinlikler/kategoriler/${cat.slug.current}`}>{cat.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="column-sitemap">
        <h4>Site Haritası</h4>
        <ul>
          <li>
            <Link href="/">Anasayfa</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/etkinlikler">Etkinlikler</Link>
          </li>
          <li>
            <Link href="/hakkimda">Hakkımda</Link>
          </li>
          <li>
            <Link href="/iletisim">İletişim</Link>
          </li>
        </ul>
      </div>
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
            developer and designed by
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
    </footer>
  );
};

export default Footer;
