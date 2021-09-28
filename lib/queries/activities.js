import { groq } from 'next-sanity';

export const activities = groq`{
"activities": 
  *[_type == "etkinlik"] | order(_createdAt desc) {
  _id,
  slug,
  title,
  image,
  publishedAt,
  "file":file.asset->url,
}[$start...$end],
"count": 
  count(*[_type == 'etkinlik']) 
}
`;
