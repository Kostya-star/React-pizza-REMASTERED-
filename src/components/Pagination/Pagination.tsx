import { FC } from 'react';
import { homeSelector } from 'redux/slices/homeSlice';
import { useAppDispatch } from './../../redux/hooks';
import s from './Pagination.module.scss';

export const Pagination: FC = () => {
  // const currentPage = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();

  // if (pizzasCount === 0) return null

  // const pagesArr = Array.from(Array(Math.ceil(pizzasCount / 4)).keys());
  const pagesArr = Array.from(Array(3).keys());

  return (
    <div className={s.pages}>
      <button
      // disabled={currentPage === 1}
      // onClick={() => dispatch(setPage(currentPage - 1))}
      >
        &#10094;
      </button>
      <ul>
        {pagesArr.map((page) => (
          <li
            key={page + 1}
            // onClick={() => dispatch(setPage(page + 1))}
            // className={page + 1 === currentPage ? `${s.active}` : ''}
          >
            {page + 1}
          </li>
        ))}
      </ul>
      <button
      // disabled={currentPage === 3}
      // onClick={() => dispatch(setPage(currentPage + 1))}
      >
        &#10095;
      </button>
    </div>
  );
};
