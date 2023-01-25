import pizza from 'assets/png/pizza.jpg';
import { ReactComponent as AddPizzaSVG } from 'assets/svg/add-pizza.svg';
import s from './Pizza.module.scss'

export const Pizza = () => {
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
        <button className="button button--outline button--add">
          <AddPizzaSVG />
          <span>Добавить</span>
        </button>
      </div>
    </div>
  );
};
