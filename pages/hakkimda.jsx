import React from 'react';
import PortableTextParser from '../components/BlockContent';
import { author } from '../lib/queries/author';
import client from '../lib/sanityClient';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import SEO from '../components/SEO';
const Hakkimda = ({ data }) => {
  const { bio, image: avatar } = data;
  const image = useNextSanityImage(client, avatar);

  return (
    <div className="about">
      <SEO
        date={data.publishedAt || ''}
        keywords={['okul öncesi öğretmeni', 'KPSS', 'feyza nur']}
      />
      <h2>Ben Kimim?</h2>
      <div className="wrapper">
        <Image
          src={image.src}
          loader={image.loader}
          quality={20}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          className="me-avatar"
        />
      </div>
      <PortableTextParser blocks={bio} />
    </div>
  );
};
export async function getStaticProps() {
  const data = await client.fetch(author);
  return {
    props: {
      data,
    },
  };
}

export default Hakkimda;
