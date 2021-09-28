import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pagination = ({ type, count }) => {
  const router = useRouter();
  console.log(count);

  const [onFirst, setOnFirst] = useState(false);
  const [onLast, setOnLast] = useState(false);
  let currentPage = {
    start: parseInt(router.query.start),
    end: parseInt(router.query.end),
    perPage: parseInt(router.query.perPage),
  };
  if (!currentPage.perPage) {
    currentPage.perPage = type === 'blog' ? 6 : 10;
  }
  if (!currentPage.start && !currentPage.end) {
    currentPage.start = 0;
    currentPage.end = currentPage.perPage;
  }
  useEffect(() => {
    if (!(currentPage.start > 0)) {
      setOnFirst(true);
    } else {
      setOnFirst(false);
    }

    if (currentPage.end > count) {
      setOnLast(true);
    } else {
      setOnLast(false);
    }
  }, [router.query]);
  let previousPage = {
    start: currentPage.start - currentPage.perPage,
    end: currentPage.end - currentPage.perPage,
  };
  let nextPage = {
    start: currentPage.start + currentPage.perPage,
    end: currentPage.end + currentPage.perPage,
  };
  let totalPage = Math.ceil(count / currentPage.perPage);
  return (
    <div className="pagination">
      {onFirst ? (
        <button className="btn" disabled={onFirst}>
          <a>Ilk sayfa</a>
        </button>
      ) : (
        <Link href={`/${type}?start=${previousPage.start}&end=${previousPage.end}`}>
          <button className="btn" disabled={onFirst}>
            önceki sayfa
          </button>
        </Link>
      )}
      <span>
        {currentPage.end / currentPage.perPage}/{totalPage}
      </span>
      {onLast ? (
        <button className="btn" disabled={onLast}>
          <a>son sayfa</a>
        </button>
      ) : (
        <Link href={`/${type}?start=${nextPage.start}&end=${nextPage.end}`}>
          <button className="btn" disabled={onLast}>
            sonraki sayfa
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
