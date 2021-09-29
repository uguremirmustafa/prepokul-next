import BlockContent from '@sanity/block-content-to-react';
import Table from './Table';
import { config } from '../lib/sanityConfig';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../lib/sanityClient';
export const serializers = {
  types: {
    image: (props) => {
      const image = useNextSanityImage(client, props.node);
      return (
        <div className="imageWrapper">
          <Image
            src={image.src}
            loader={image.loader}
            width={image.width}
            height={image.height}
            quality={10}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />
        </div>
      );
    },
    table: ({ node }) => <Table tableContent={node} />,
  },
};

const PortableTextParser = ({ blocks }) => {
  return <BlockContent {...config} blocks={blocks} serializers={serializers} />;
};
export default PortableTextParser;
