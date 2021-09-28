import { groq } from 'next-sanity';

export const posts = groq`
*[_type == "post" && pinned == true] | order(_createdAt desc) {
  _id,
  slug,
  title,
  pinned,
  publishedAt,
  excerpt,
  mainImage, 
  author->{name,image},
  "categoryName":categories[0]->title
}[$start...$end]
`;
