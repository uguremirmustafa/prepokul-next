import { groq } from 'next-sanity';

export const allActivityPaths = groq`
*[_type == "etkinlik"]{
  "slug":slug.current, 
}
`;
