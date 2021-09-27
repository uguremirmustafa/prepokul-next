import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
interface Props {}

const Home = ({}: Props) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <Link href="/api/auth/logout">login</Link>;
      </div>
    );
  }
  return <Link href="/api/auth/login">login</Link>;
};

export default Home;
