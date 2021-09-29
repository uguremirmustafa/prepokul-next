import sanityClient from '@sanity/client';
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
};
const client = sanityClient(config);

export default async function createComment(req, res) {
  const { ad, email, mesaj } = JSON.parse(req.body);
  console.log(req.body);
  try {
    await client.create({
      _type: 'contact',
      ad,
      email,
      mesaj,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit message`, err });
  }
  return res.status(200).json({ message: 'Message submitted' });
}
