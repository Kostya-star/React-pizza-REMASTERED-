import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import { FC, useState } from 'react';
import { setSearchValue } from 'redux/slices/homeSlice';
import s from './InputSearch.module.scss';
import { useAppDispatch } from './../../redux/hooks';

export const InputSearch: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch()

  const onSearchChange = (value: string) => {
    setValue(value);
    dispatch(setSearchValue(value));
  };

  const onClearSearch = () => {
    setValue('')
    dispatch(setSearchValue(''))
  }

  return (
    <div className={s.search}>
      <SearchGlassSVG />
      <input
        value={value}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        placeholder="Search"
      />
      {value && <CloseSVG onClick={onClearSearch} />}
    </div>
  );
};
