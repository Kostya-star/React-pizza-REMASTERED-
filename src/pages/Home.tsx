import axios from 'axios';
import { Categories } from 'components/Categories/Categories';
import { Pagination } from 'components/Pagination/Pagination';
import { Pizza } from 'components/Pizza/Pizza';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { SortDropdown } from 'components/SortDropdown/SortDropdown';
import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { IPizza, ISortOption } from 'types';
import { baseRequest } from 'api/baseRequest';

export const Home: FC = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setLoading] = useState(false);
  // const [pizzaCategory, setPizzaCategory] = useState(0);
  const [selectedSort, setSelectedSort] = useState({} as ISortOption);
  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue, pizzaCategory } = useAppSelector(({ home }) => home);

  useEffect(() => {
    setLoading(true);

    const fetchPizzas = async () => {
      const resp = await axios
        .get(`${baseRequest}`, {
          params: {
            ...(pizzaCategory > 0 ? { category: pizzaCategory } : {}),
            ...(selectedSort.value ? { sortBy: selectedSort.value } : {}),
            ...(searchValue ? { search: searchValue } : {}),
            page: currentPage,
            limit: pizzaCategory > 0 ? 4 : '',
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
  }, [pizzaCategory, selectedSort, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <SortDropdown
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};
