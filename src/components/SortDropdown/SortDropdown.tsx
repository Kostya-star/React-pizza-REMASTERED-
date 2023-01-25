import { ReactComponent as SortSVG } from 'assets/svg/sortDropdown.svg';
import s from './SortDropdown.module.scss'

export const SortDropdown = () => {
  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        <SortSVG />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className={s.sort__popup}>
        <ul>
          <li className={s.active}>популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};
