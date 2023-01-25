import pizza from 'assets/png/pizza.jpg';
import { ReactComponent as AddPizzaSVG } from 'assets/svg/add-pizza.svg';
import { useState } from 'react';
import s from './Pizza.module.scss';

export const Pizza = () => {
  const [addPizza, setAddPizza] = useState(0);

  const onAddPizza = () => {
    setAddPizza(addPizza + 1);
  };

  return (
    <div className={s.pizza}>
      <a href="/pizza/8">
        <img className={s.pizza__image} src={pizza} alt="Pizza" />
        <h4 className={s.pizza__title}>Четыре сезона</h4>
      </a>
      <div className={s.pizza__selector}>
        <ul>
          <li className={s.active}>тонкое</li>
          <li className="">традиционное</li>
        </ul>
        <ul>
          <li className={s.active}>26 см.</li>
          <li className="">30 см.</li>
          <li className="">40 см.</li>
        </ul>
      </div>
      <div className={s.pizza__bottom}>
        <div className={s.pizza__price}>от 395 ₽</div>
        <button
          onClick={onAddPizza}
          className="button button--outline button--add"
        >
          <AddPizzaSVG />
          <span>Добавить {addPizza}</span>
        </button>
      </div>
    </div>
  );
};
