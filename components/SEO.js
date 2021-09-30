import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
const SEO = ({ date = '', keywords = [], title = '', excerpt = '' }) => {
  const router = useRouter();
  const meta = {
    title: `${
      title !== '' ? `${title} - Prepokul` : 'Prepokul'
    } | Okul öncesi etkinlikler, PDF içerikler, oyunlar ve KPSS tavsiyeleri`,
    description:
      excerpt !== ''
        ? excerpt
        : `KPSS, okul öncesi etkinlikler, KPSS tavsiyeleri, KPSS'de derece yapmak, etkinlik, anasınıfı.`,
    image: 'https://www.prepokul.com/logo.png',
    type: 'website',
    date,
    keywords: [
      ...keywords,
      'okul öncesi',
      'anasınıfı',
      'pdf indir',
      'yüksek çözünürlük',
      'etkinlik',
      'kaliteli',
    ],
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://prepokul.com${router.asPath}`} />
      <link rel="canonical" href={`https://prepokul.com${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Prepokul" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@prepokul" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && <meta property="article:published_time" content={meta.date} />}
    </Head>
  );
};

export default SEO;
