import { ReactComponent as SortUpSVG } from 'assets/svg/sort-up.svg';
import { ReactComponent as SortDownSVG } from 'assets/svg/sort-down.svg';
import s from './SortDropdown.module.scss';
import { useState } from 'react';

const dropDownOptions = ['популярности', 'цене', 'алфавиту'];

export const SortDropdown = () => {
  const [isVisible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const onSelectOption = (index: number) => {
    setSelectedOption(index);
    setVisible(false);
  };

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        {isVisible ? <SortDownSVG /> : <SortUpSVG />}
        <b>Сортировка по:</b>
        <span onClick={() => setVisible(!isVisible)}>популярности</span>
      </div>
      {isVisible && (
        <div className={s.sort__popup}>
          <ul>
            {dropDownOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => onSelectOption(index)}
                className={selectedOption === index ? `${s.active}` : ''}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
