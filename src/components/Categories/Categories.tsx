import { useState } from 'react';
import s from './Categories.module.scss';

const pizzaTypes = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];


export const Categories = () => {
  const [selectedPizzaType, setSelectedPizzaType] = useState(0);

  return (
    <div className={s.categories}>
      <ul>
        {pizzaTypes.map((pizza, index) => (
          <li
            key={index}
            onClick={() => setSelectedPizzaType(index)}
            className={index === selectedPizzaType ? `${s.active}` : ''}
          >
            {pizza}
          </li>
        ))}
      </ul>
    </div>
  );
};
