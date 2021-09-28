import { groq } from 'next-sanity';

export const allPostsCount = groq`
count(*[_type == 'post']) 
`;
