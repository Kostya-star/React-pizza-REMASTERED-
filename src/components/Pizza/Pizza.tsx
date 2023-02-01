import { ReactComponent as AddPizzaSVG } from 'assets/svg/add-pizza.svg';
import { FC, useState } from 'react';
import { IPizza } from 'types';
import s from './Pizza.module.scss';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addItem } from 'redux/slices/cartSlice';

interface IPizzaProps extends IPizza {}

const pizzaTypes = ['тонкое', 'традиционное'];

export const Pizza: FC<IPizzaProps> = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
}) => {
  const { items } = useAppSelector(({ cart }) => cart);
  const dispatch = useAppDispatch();

  const pizzaCount = items.find((pizza) => pizza.id === id)?.count;
  const pizzaType = items.find((pizza) => pizza.id === id)?.type;
  const pizzaSize = items.find((pizza) => pizza.id === id)?.size;

  const [selectedPizzaType, setSelectedPizzaType] = useState(() => {
    return pizzaType ? pizzaTypes.indexOf(pizzaType) : 0
  });

  const [selectedPizzaSize, setSelectedPizzaSize] = useState(() => {
    return pizzaSize ? sizes.indexOf(pizzaSize) : 0
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


  if(pizzaType) console.log(pizzaTypes.indexOf(pizzaType));
  // console.log(pizzaTypes[selectedPizzaType]);
  

  return (
    <div className={s.pizza}>
      <div className={s.pizza__container}>
        <a href="/pizza/8">
          <img className={s.pizza__image} src={imageUrl} alt="Pizza" />
          <h4 className={s.pizza__title}>{title}</h4>
        </a>
        <div className={s.pizza__selector}>
          <ul>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setSelectedPizzaType(type)}
                // className={selectedPizzaType === type ? `${s.active}` : ''}
                className={types[selectedPizzaType] === type ? `${s.active}` : ''}
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
            <span>Добавить {pizzaCount ?? null}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
