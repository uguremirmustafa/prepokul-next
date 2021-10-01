import { groq } from 'next-sanity';
// author._ref in *[_type=="author" && name=="John Doe"
export const allActivitiesUnderCategory = groq`
*[_type == "etkinlikCategory" && slug.current == $slug]{
  title,
  "activities": *[_type == "etkinlik" && references(^._id)] | order(_createdAt desc){
    _id,
    slug,
    title,
    image,
    publishedAt,
    keywords,
    "file":file.asset->url
  }
}[0]
`;
