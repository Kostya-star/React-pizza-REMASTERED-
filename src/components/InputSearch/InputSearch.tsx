import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import { FC, useRef, useState, useCallback } from 'react';
import { setSearchValue } from 'redux/slices/homeSlice';
import { useAppDispatch } from './../../redux/hooks';
import s from './InputSearch.module.scss';
import debounce from 'lodash.debounce';

export const InputSearch: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useCallback(debounce((value: string) => {
    dispatch(setSearchValue(value))
  }, 700), [])

  const onSearchChange = (value: string) => {
    setValue(value);
    debouncedSearch(value)
  };

  const onClearSearch = () => {
    setValue('');
    dispatch(setSearchValue(''));
    searchRef.current?.focus();
  };

  return (
    <div className={s.search}>
      <SearchGlassSVG />
      <input
        value={value}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        ref={searchRef}
        placeholder="Search"
      />
      {value && <CloseSVG onClick={onClearSearch} />}
    </div>
  );
};
