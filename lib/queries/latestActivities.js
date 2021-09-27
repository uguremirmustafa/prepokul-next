import { groq } from 'next-sanity';

export const latestActivities = groq`
*[_type == "etkinlik"] | order(_createdAt desc) {
  title,
  image,
  slug,
  publishedAt,
  "file":file.asset->url,
  author->{name,image}
}[0...5]
`;
