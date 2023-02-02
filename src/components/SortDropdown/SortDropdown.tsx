import { ReactComponent as SortDownSVG } from 'assets/svg/sort-down.svg';
import { ReactComponent as SortUpSVG } from 'assets/svg/sort-up.svg';
import { FC, memo, useEffect, useRef, useState } from 'react';
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

interface ISortDropdownProps {
  sortOrder: string;
  setSortOrder: (sort: string) => void;
}

export const SortDropdown = memo(
  ({ sortOrder, setSortOrder }: ISortDropdownProps) => {
    SortDropdown.displayName = 'SortDropdown';
    const [isVisible, setVisible] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const onClickSortOutside = ({ target }: MouseEvent) => {
        if (!sortRef.current?.contains(target as Node)) {
          setVisible(false);
        }
      };

      document.body.addEventListener('click', onClickSortOutside);

      return () =>
        document.body.removeEventListener('click', onClickSortOutside);
    }, []);

    const onSelectOption = (sort: string) => {
      setSortOrder(sort);
      setVisible(false);
    };

    const currentSort = dropDownOptions.find(
      (s) => s.value === sortOrder,
    )?.label;

    return (
      <div className={s.sort} ref={sortRef}>
        <div className={s.sort__label}>
          {isVisible ? <SortDownSVG /> : <SortUpSVG />}
          <b>Sort by:</b>
          <span onClick={() => setVisible(!isVisible)}>{currentSort}</span>
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
  },
);
