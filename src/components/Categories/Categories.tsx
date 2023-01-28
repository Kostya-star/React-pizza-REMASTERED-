import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';
import s from './Categories.module.scss';
import { useAppDispatch } from './../../redux/hooks';
import { setCategory } from 'redux/slices/homeSlice';

const pizzaTypes = ['All', 'Meat', 'Vegetarian', 'Spicy', 'Mixed'];

export const Categories: FC = () => {
  const category = useAppSelector(({ home }) => home.pizzaCategory);
  const dispatch = useAppDispatch()

  return (
    <div className={s.categories}>
      <ul>
        {pizzaTypes.map((pizza, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategory(index))}
            className={index === category ? `${s.active}` : ''}
          >
            {pizza}
          </li>
        ))}
      </ul>
    </div>
  );
};
