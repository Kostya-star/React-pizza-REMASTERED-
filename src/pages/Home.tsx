import { Categories } from 'components/Categories/Categories';
import { Pizza } from 'components/Pizza/Pizza';
import { ServerError } from 'components/ServerError/ServerError';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { SortDropdown } from 'components/SortDropdown/SortDropdown';
import qs from 'qs';
import { FC, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import {
  fetchPizzas,
  homeSelector,
  setCategory,
  setSearchValue,
  setSortOrder,
} from 'redux/slices/homeSlice';
import { useAppDispatch } from './../redux/hooks';

export const Home: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { items, search, category, order, status } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      const { category, order, search } = qs.parse(
        location.search.substring(1),
      );

      search && dispatch(setSearchValue(search as string));
      category && dispatch(setCategory(Number(category)));
      order && dispatch(setSortOrder(order as string));
    }
    isMounted.current = true;
  }, [location.search]);

  useEffect(() => {
    void dispatch(fetchPizzas({ category, order, search }));
  }, [category, order, search]);

  useEffect(() => {
    const queryString = qs.stringify({
      ...(category && { category }),
      ...(order && { order }),
      ...(search && { search }),
    });
    navigate(`?${queryString}`);
  }, [category, order, search]);

  const onSetSortOrderHandler = useCallback((sort: string) => {
    dispatch(setSortOrder(sort));
  }, []);

  const onSetPizzaCategoryHandler = useCallback((category: number) => {
    dispatch(setCategory(category));
  }, []);

  const pizzas = items.map((pizza) => (
    <Pizza key={pizza.id} pizza={{ ...pizza, id: Number(pizza.id) }} />
  ));
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          category={category}
          setCategory={onSetPizzaCategoryHandler}
        />
        <SortDropdown sortOrder={order} setSortOrder={onSetSortOrderHandler} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <ServerError />
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeleton : pizzas}
        </div>
      )}
      {/* <Pagination /> */}
    </>
  );
};
