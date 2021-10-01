import React from 'react';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import InstagramIcon from '../components/svgs/instagramIcon';
import PinterestIcon from '../components/svgs/pinterestIcon';
import TwitterIcon from '../components/svgs/twitterIcon';

const Iletisim = () => {
  return (
    <div className="iletisim">
      <SEO
        date=""
        keywords={['iletişim']}
        title="İletişim"
        excerpt="Bize Instagram, Pinterest veya Twitter aracılığıyla ulaşabilirsiniz."
      />
      <SectionTitle>Bize Ulaşın!</SectionTitle>
      <div className="grid">
        <div className="formWrapper">
          <p>Bize formu doldurarak ulaşabilirsiniz!</p>
          <ContactForm />
        </div>
        <div className="socialWrapper">
          <div className="iletisim-content">
            <p>Sosyal medyada da varız!</p>
            <div className="wrapper">
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/prepokul">
                <InstagramIcon />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/prepokul">
                <TwitterIcon />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://pinterest.com/prepokul">
                <PinterestIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
