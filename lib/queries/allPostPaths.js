import { groq } from 'next-sanity';

export const allPostPaths = groq`
*[_type == "post"]{
  "slug":slug.current, 
}
`;
