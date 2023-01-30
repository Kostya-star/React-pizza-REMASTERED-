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
} from 'redux/slices/homeSlice';

export const Home: FC = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { searchValue, pizzaCategory, sortOrder, page } = useAppSelector(
    ({ home }) => home,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { category, order, search } = qs.parse(location.search.substring(1));

    search && dispatch(setSearchValue(search as string));
    category && dispatch(setCategory(Number(category)));
    order && dispatch(setSortOrder(order as string));
  }, [location.search]);

  useEffect(() => {
    setLoading(true);
    const fetchPizzas = async () => {
      const resp = await axios
        .get(`${baseRequest}`, {
          params: {
            ...(pizzaCategory > 0 ? { category: pizzaCategory } : {}),
            ...(sortOrder ? { sortBy: sortOrder } : {}),
            ...(searchValue ? { search: searchValue } : {}),
            // page,
            // limit: pizzaCategory === 0 ? 4 : '',
            // limit: 4,
          },
        })
        .catch((e) => {
          alert('smth went wrong');
          console.log(e);
        });

      if (resp?.data.length) {
        setPizzas(resp.data);
        setLoading(false);
      }
    };
    void fetchPizzas();
  }, [pizzaCategory, sortOrder, searchValue]);

  useEffect(() => {
    const queryString = qs.stringify({
      ...(pizzaCategory && { category: pizzaCategory }),
      ...(sortOrder && { order: sortOrder }),
      ...(searchValue && { search: searchValue }),
    });
    navigate(`?${queryString}`);
  }, [pizzaCategory, sortOrder, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <SortDropdown />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
      </div>
      {/* <Pagination /> */}
    </>
  );
};
