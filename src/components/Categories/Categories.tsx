import { FC } from 'react';
import { setCategory } from 'redux/slices/homeSlice';
import s from './Categories.module.scss';

const pizzaTypes = ['All', 'Meat', 'Vegetarian', 'Spicy', 'Mixed'];

export const Categories: FC = () => {
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
