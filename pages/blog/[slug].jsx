import React, { useEffect } from 'react';
import client from '../../lib/sanityClient';
import { post } from '../../lib/queries/post';
import { allPostPaths } from '../../lib/queries/allPostPaths';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../utils/date-formatter';
import MorePosts from '../../components/MorePosts';
import PortableTextParser from '../../components/BlockContent';
import ClockIcon from '../../components/svgs/clockIcon';
import PageViews from '../../components/PageView';
import SEO from '../../components/SEO';

const Blog = ({ postData: post }) => {
  if (!post) {
    return <div>loading</div>;
  }
  const image = useNextSanityImage(client, post.mainImage);
  const avatar = useNextSanityImage(client, post.author.image);

  useEffect(() => {
    if (!post) return;
    fetch(`/api/views/${post.slug.current}`, {
      method: 'POST',
    });
  }, [post.slug.current]);

  return (
    <div>
      {post && (
        <div className="blog-post">
          <SEO
            date={post.publishedAt}
            title={post.title}
            excerpt={post.excerpt}
            keywords={post.keywords ? [...post.keywords] : post.title}
          />
          <div className="post-meta">
            <div className="imageWrapper">
              <Image
                src={image.src}
                loader={image.loader}
                layout="fill"
                quality={10}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
              />
            </div>
            <div className="content">
              <Link href={`/blog/kategoriler/${post.category.slug}`}>{post.category.title}</Link>

              <h1>{post.title}</h1>
              <div className="author">
                <div className="avatar">
                  <Image src={avatar.src} loader={avatar.loader} layout="fill" objectFit="cover" />
                </div>
                <span>{post.author.name}</span>
              </div>
              <span className="date">{formatDate(post.publishedAt)}</span>
              <span className="reading-time">
                <ClockIcon />
                <span>{post.readingTime} dakika</span>
              </span>
              <PageViews slug={post.slug.current} />
            </div>
          </div>
          <div className="post-body">
            <PortableTextParser blocks={post.body} />
          </div>
          <MorePosts posts={post.relatedPosts} />
        </div>
      )}
    </div>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const postData = await client.fetch(post, { slug: context.params.slug });

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await client.fetch(allPostPaths);
  const paths = slugs.map((slug) => ({ params: slug }));
  return {
    paths,
    fallback: true,
  };
}
