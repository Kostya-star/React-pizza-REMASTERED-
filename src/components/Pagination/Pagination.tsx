import { FC } from 'react';
import s from './Pagination.module.scss';
import { useAppSelector } from 'redux/hooks';
import { useAppDispatch } from './../../redux/hooks';

// interface IPaginationProps {
//   currentPage: number;
//   setCurrentPage: (page: number | ((prev: number) => number)) => void;
// }

export const Pagination: FC = () => {
  const currentPage = useAppSelector(({ home }) => home.page)
  const dispatch = useAppDispatch()

  // const pagesArr = Array.from(Array(Math.ceil(pages)).keys());
  const pagesArr = Array.from(Array(3).keys());

  return (
    <div className={s.pages}>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &#10094;
      </button>
      <ul>
        {pagesArr.map((page) => (
          <li key={page + 1} onClick={() => setCurrentPage(page + 1)}>
            {page + 1}
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === 3}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &#10095;
      </button>
    </div>
  );
};
