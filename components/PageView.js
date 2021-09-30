import useSWR from 'swr';
import React from 'react';
import EyeIcon from '../components/svgs/eyeIcon';
const fetcher = async (input) => {
  const res = await fetch(input);
  const data = await res.json();
  return data;
};

const PageViews = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  //   console.log(data);
  return (
    <div className="page-view">
      <EyeIcon />
      {data?.total ? `${data.total} okuma` : `––`}
    </div>
  );
};

export default PageViews;
