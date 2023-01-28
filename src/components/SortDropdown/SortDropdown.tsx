import { ReactComponent as SortDownSVG } from 'assets/svg/sort-down.svg';
import { ReactComponent as SortUpSVG } from 'assets/svg/sort-up.svg';
import { FC, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { setSortOrder } from 'redux/slices/homeSlice';
import { useAppDispatch } from './../../redux/hooks';
import s from './SortDropdown.module.scss';

const dropDownOptions = [
  {
    value: 'rating',
    label: 'rating',
  },
  {
    value: 'price',
    label: 'price',
  },
  {
    value: 'title',
    label: 'abc',
  },
];

export const SortDropdown: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const sortOrder = useAppSelector(({ home }) => home.sortOrder);
  const dispatch = useAppDispatch();

  const onSelectOption = (sort: string) => {
    dispatch(setSortOrder(sort));
    setVisible(false);
  };

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        {isVisible ? <SortDownSVG /> : <SortUpSVG />}
        <b>Sort by:</b>
        <span onClick={() => setVisible(!isVisible)}>
          {sortOrder || 'Click here'}
        </span>
      </div>
      {isVisible && (
        <div className={s.sort__popup}>
          <ul>
            {dropDownOptions.map((sortObj, index) => (
              <li
                key={index}
                onClick={() => onSelectOption(sortObj.value)}
                className={sortOrder === sortObj.value ? `${s.active}` : ''}
              >
                {sortObj.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
