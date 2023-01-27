import { FC } from 'react';
import s from './Pagination.module.scss';

interface IPaginationProps {
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export const Pagination: FC<IPaginationProps> = ({ setCurrentPage }) => {
  // const pagesArr = Array.from(Array(Math.ceil(pages)).keys());
  const pagesArr = Array.from(Array(3).keys());

  return (
    <div className={s.pages}>
      <span onClick={() => setCurrentPage((prev) => {
        return prev <= 1 ? 1 : prev - 1
      })}>&#10094;</span>
      <ul>
        {pagesArr.map((page) => (
          <li key={page + 1} onClick={() => setCurrentPage(page + 1)}>
            {page + 1}
          </li>
        ))}
      </ul>
      <span onClick={() => setCurrentPage((prev) => {
        return prev >= 3 ? 3 : prev + 1
      })}>&#10095;</span>
    </div>
  );
};
