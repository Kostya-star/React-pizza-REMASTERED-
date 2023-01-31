import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import debounce from 'lodash.debounce';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import s from './InputSearch.module.scss';

interface InputSearchProps {
  searchVal: string;
  onSetSearchVal: (val: string) => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  searchVal,
  onSetSearchVal,
}) => {
  const [localVal, setLocalVal] = useState('');

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalVal(searchVal);
  }, [searchVal]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSetSearchVal(value);
    }, 700),
    [],
  );

  const onSearchChange = (value: string) => {
    setLocalVal(value);
    debouncedSearch(value);
  };

  const onClearSearch = () => {
    setLocalVal('');
    onSetSearchVal('');
    searchRef.current?.focus();
  };

  return (
    <div className={s.search}>
      <SearchGlassSVG />
      <input
        // defaultValue={searchVal}
        value={localVal}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        ref={searchRef}
        placeholder="Search"
      />
      {localVal && <CloseSVG onClick={onClearSearch} />}
    </div>
  );
};
