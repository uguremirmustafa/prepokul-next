import { groq } from 'next-sanity';

export const author = groq`
  *[_type == "author"] {
  ...
}[0]
`;
