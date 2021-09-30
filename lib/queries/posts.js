import { groq } from 'next-sanity';

export const posts = groq`{
"posts": 
  *[_type == "post"] | order(_createdAt desc) {
  _id,
  slug,
  title,
  pinned,
  publishedAt,
  excerpt,
  mainImage, 
  author->{name,image},
  "categoryName":categories[0]->title,
  "readingTime": round(length(pt::text(body)) / 5 / 180 )
}[$start...$end],
"count": 
  count(*[_type == 'post']) 
}
`;
