import { ReactComponent as AddPizzaSVG } from 'assets/svg/add-pizza.svg';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addItem, cartSelector } from 'redux/slices/cartSlice';
import { IPizza } from 'types/types';
import s from './Pizza.module.scss';

interface IPizzaProps {
  pizza: IPizza;
}

const pizzaTypes = ['тонкое', 'традиционное'];

export const Pizza: FC<IPizzaProps> = ({ pizza }) => {
  const { items } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const { id, imageUrl, title, types, sizes, price } = pizza;

  const currentPizzaCount = items.find((pizza) => pizza.id === id)?.count;
  const currentPizzaType = items.find((pizza) => pizza.id === id)?.type;
  const currentPizzaSize = items.find((pizza) => pizza.id === id)?.size;

  const [selectedPizzaType, setSelectedPizzaType] = useState(() => {
    return currentPizzaType ? pizzaTypes.indexOf(currentPizzaType) : 0;
  });

  const [selectedPizzaSize, setSelectedPizzaSize] = useState(() => {
    return currentPizzaSize ? sizes.indexOf(currentPizzaSize) : 0;
  });

  const onAddPizza = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: pizzaTypes[selectedPizzaType],
      size: sizes[selectedPizzaSize],
      count: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={s.pizza}>
      <div className={s.pizza__container}>
        <Link to={`pizza/${id}`}>
          <img className={s.pizza__image} src={imageUrl} alt="Pizza" />
          <h4 className={s.pizza__title}>{title}</h4>
        </Link>
        <div className={s.pizza__selector}>
          <ul>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setSelectedPizzaType(type)}
                className={
                  types[selectedPizzaType] === type ? `${s.active}` : ''
                }
              >
                {pizzaTypes[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={() => setSelectedPizzaSize(index)}
                className={selectedPizzaSize === index ? `${s.active}` : ''}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={s.pizza__bottom}>
          <div className={s.pizza__price}>от {price} ₽</div>
          <button onClick={onAddPizza}>
            <AddPizzaSVG />
            <span>Добавить {currentPizzaCount ?? null}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
