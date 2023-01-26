import axios from 'axios';
import { Categories } from 'components/Categories/Categories';
import { Pizza } from 'components/Pizza/Pizza';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { SortDropdown } from 'components/SortDropdown/SortDropdown';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPizza, ISortOption } from 'types';
import { baseRequest } from './../api/baseRequest';

export const Home = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [pizzaCategory, setPizzaCategory] = useState(0);
  const [selectedSort, setSelectedSort] = useState({} as ISortOption);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const fetchPizzas = async () => {
      const resp = await axios
        .get(`${baseRequest}`, {
          params: {
            ...(pizzaCategory > 0 ? { category: pizzaCategory } : {}),
            ...(selectedSort.value ? { sortBy: selectedSort.value } : {}),
          },
        })
        .catch((e) => {
          alert('smth went wrong');
          console.log(e);
        });

      if (resp && resp.data.length) {
        setPizzas(resp.data);
        setLoading(false);
      }
      // navigate(`/${selectedSort && `?sortBy=${selectedSort}`}`)
    };
    fetchPizzas();
  }, [pizzaCategory, selectedSort]);

  return (
    <>
      <div className="content__top">
        <Categories category={pizzaCategory} setCategory={setPizzaCategory} />
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
    </>
  );
};