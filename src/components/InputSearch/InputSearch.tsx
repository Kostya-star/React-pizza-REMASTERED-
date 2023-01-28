import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import debounce from 'lodash.debounce';
import { FC, useCallback, useRef } from 'react';
import { setSearchValue } from 'redux/slices/homeSlice';
import { useAppDispatch, useAppSelector } from './../../redux/hooks';
import s from './InputSearch.module.scss';

export const InputSearch: FC = () => {
  const searchValue = useAppSelector(({ home }) => home.searchValue);
  const dispatch = useAppDispatch();

  const searchRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 700),
    [],
  );

  const onSearchChange = (value: string) => {
    debouncedSearch(value);
  };

  const onClearSearch = () => {
    dispatch(setSearchValue(''));
    searchRef.current?.focus();
  };

  return (
    <div className={s.search}>
      <SearchGlassSVG />
      <input
        defaultValue={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        ref={searchRef}
        placeholder="Search"
      />
      {searchValue && <CloseSVG onClick={onClearSearch} />}
    </div>
  );
};
