import { groq } from 'next-sanity';

export const heroPosts = groq`
*[_type == "post" && pinned == true] | order(_createdAt desc) {
  _id,
  slug,
  title,
  pinned,
  publishedAt,
  mainImage, 
  author->{name,image},
  "categoryName":categories[0]->title
}[0...4]
`;
