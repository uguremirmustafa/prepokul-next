import { groq } from 'next-sanity';

export const allActivityCategories = groq`
*[_type == "etkinlikCategory"] | order(_createdAt desc) {
  _id,
  slug,
  title,
  name
}
`;
