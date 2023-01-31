import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import debounce from 'lodash.debounce';
import { FC, useCallback, useRef, useState, memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSearchValue } from 'redux/slices/homeSlice';
import s from './InputSearch.module.scss';

export const InputSearch: FC = () => {
  // const searchValue = useAppSelector(({ home }) => home.searchValue);
  // const dispatch = useAppDispatch();

  const [inputVal, setInputVal] = useState(searchValue);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputVal(searchValue);
  }, [searchValue]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 700),
    [],
  );

  const onSearchChange = (value: string) => {
    setInputVal(value);
    debouncedSearch(value);
  };

  const onClearSearch = () => {
    setInputVal('');
    dispatch(setSearchValue(''));
    searchRef.current?.focus();
  };

  return (
    <div className={s.search}>
      <SearchGlassSVG />
      <input
        // defaultValue={inputVal}
        value={inputVal}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        ref={searchRef}
        placeholder="Search"
      />
      {searchValue && <CloseSVG onClick={onClearSearch} />}
    </div>
  );
};
