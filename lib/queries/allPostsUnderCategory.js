import { groq } from 'next-sanity';
// author._ref in *[_type=="author" && name=="John Doe"
export const allPostsUnderCategory = groq`
*[_type == "category" && slug.current == $slug]{
  title,
  "posts": *[_type == "post" && references(^._id)] | order(_createdAt desc){
    _id,
    slug,
    title,
    pinned,
    publishedAt,
    excerpt,
    mainImage, 
    author->{name,image},
    "categoryName":categories[0]->title
  }
}[0]
`;
