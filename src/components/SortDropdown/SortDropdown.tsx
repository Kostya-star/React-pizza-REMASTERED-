import { ReactComponent as SortUpSVG } from 'assets/svg/sort-up.svg';
import { ReactComponent as SortDownSVG } from 'assets/svg/sort-down.svg';
import s from './SortDropdown.module.scss';
import { useState, FC } from 'react';
import { ISortOption } from 'types';

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

interface ISortDropdownProps {
  selectedSort: ISortOption;
  setSelectedSort: (sort: ISortOption) => void;
}

export const SortDropdown: FC<ISortDropdownProps> = ({
  selectedSort,
  setSelectedSort,
}) => {
  const [isVisible, setVisible] = useState(false);

  const onSelectOption = (sortObj: ISortOption) => {
    setSelectedSort(sortObj);
    setVisible(false);
  };

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        {isVisible ? <SortDownSVG /> : <SortUpSVG />}
        <b>Sort by:</b>
        <span onClick={() => setVisible(!isVisible)}>
          {selectedSort.label ?? 'Click here'}
        </span>
      </div>
      {isVisible && (
        <div className={s.sort__popup}>
          <ul>
            {dropDownOptions.map((sortObj, index) => (
              <li
                key={index}
                onClick={() => onSelectOption(sortObj)}
                className={selectedSort === sortObj ? `${s.active}` : ''}
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
