import { groq } from 'next-sanity';

export const post = groq`
  *[_type == "post" && slug.current == $slug] {
  _id,
  slug,
  title,
  pinned,
  publishedAt,
  body,
  mainImage, 
  author->{name,image},
  "category":categories[0]->{title,"slug":slug.current},
  "relatedPosts": *[_type == "post" && categories[0]._ref == ^.categories[0]._ref] | order(_createdAt desc){
    _id,
    slug,
    title,
    pinned,
    publishedAt,
    excerpt,
    mainImage, 
    author->{name,image},
    "categoryName":categories[0]->title
  }[0...2]
}[0]
`;
