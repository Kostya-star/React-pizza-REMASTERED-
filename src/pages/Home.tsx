import { baseRequest } from 'api/baseRequest';
import axios from 'axios';
import { Categories } from 'components/Categories/Categories';
import { Pizza } from 'components/Pizza/Pizza';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { SortDropdown } from 'components/SortDropdown/SortDropdown';
import qs from 'qs';
import { FC, useEffect, useState, useRef } from 'react';
import { useAppSelector } from 'redux/hooks';
import { IPizza } from 'types';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from './../redux/hooks';
import {
  setSearchValue,
  setCategory,
  setSortOrder,
  setItems,
} from 'redux/slices/homeSlice';

export const Home: FC = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { items, search, category, order } = useAppSelector(({ home }) => home);
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
    setLoading(true);
    const fetchPizzas = async () => {
      const resp = await axios
        .get(`${baseRequest}`, {
          params: {
            ...(category > 0 ? { category } : {}),
            ...(order ? { sortBy: order } : {}),
            ...(search ? { search } : {}),
          },
        })
        .catch((e) => {
          alert('smth went wrong');
          console.log(e);
        });

      if (resp?.data.length) {
        dispatch(setItems(resp.data));
      }
      setLoading(false);
    };
    void fetchPizzas();
  }, [category, order, search]);

  useEffect(() => {
    const queryString = qs.stringify({
      ...(category && { category }),
      ...(order && { order }),
      ...(search && { search }),
    });
    navigate(`?${queryString}`);
  }, [category, order, search]);

  const onSetSortOrderHandler = (sort: string) => {
    dispatch(setSortOrder(sort));
  };

  const onSetPizzaCategoryHandler = (category: number) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          category={category}
          setCategory={onSetPizzaCategoryHandler}
        />
        <SortDropdown sortOrder={order} setSortOrder={onSetSortOrderHandler} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
      </div>
      {/* <Pagination /> */}
    </>
  );
};
