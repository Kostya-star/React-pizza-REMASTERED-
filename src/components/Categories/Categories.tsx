import { FC, memo } from 'react';
import s from './Categories.module.scss';

const pizzaTypes = ['All', 'Meat', 'Vegetarian', 'Spicy', 'Mixed'];

interface ICategoriesProps {
  category: number;
  setCategory: (category: number) => void;
}

export const Categories = memo(({ category, setCategory }: ICategoriesProps) => {
  Categories.displayName = 'Categories'
  return (
    <div className={s.categories}>
      <ul>
        {pizzaTypes.map((pizza, index) => (
          <li
            key={index}
            onClick={() => setCategory(index)}
            className={index === category ? `${s.active}` : ''}
          >
            {pizza}
          </li>
        ))}
      </ul>
    </div>
  );
});
