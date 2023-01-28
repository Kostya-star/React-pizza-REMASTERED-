import { baseRequest } from 'api/baseRequest';
import axios from 'axios';
import { Categories } from 'components/Categories/Categories';
import { Pagination } from 'components/Pagination/Pagination';
import { Pizza } from 'components/Pizza/Pizza';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { SortDropdown } from 'components/SortDropdown/SortDropdown';
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { IPizza } from 'types';

export const Home: FC = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { searchValue, pizzaCategory, sortOrder, page } = useAppSelector(
    ({ home }) => home,
  );
  console.log(pizzas);

  useEffect(() => {
    setLoading(true);

    const fetchPizzas = async () => {
      const resp = await axios
        .get(`${baseRequest}`, {
          params: {
            ...(pizzaCategory > 0 ? { category: pizzaCategory } : {}),
            ...(sortOrder ? { sortBy: sortOrder } : {}),
            ...(searchValue ? { search: searchValue } : {}),
            page,
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
      // navigate(`/${selectedSort && `?sortBy=${selectedSort}`}`)
    };
    void fetchPizzas();
  }, [pizzaCategory, sortOrder, searchValue, page]);

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
