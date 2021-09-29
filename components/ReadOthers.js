import React from 'react';
import Link from 'next/link';

const ReadOthers = ({ text, href }) => {
  return (
    <span className="read-others">
      <Link href={href}>{text}</Link>
    </span>
  );
};

export default ReadOthers;
