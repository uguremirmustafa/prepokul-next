import { groq } from 'next-sanity';

export const allBlogCategories = groq`
*[_type == "category"] | order(_createdAt desc) {
  _id,
  slug,
  title,
  name
}
`;
