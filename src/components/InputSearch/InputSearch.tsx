import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import { FC, memo, useRef, useState, useEffect } from 'react';
import s from './InputSearch.module.scss';

interface InputSearchProps {
  searchVal: string;
  onDebounceSearch: (val: string) => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  searchVal,
  onDebounceSearch,
}) => {
  const [localVal, setLocalVal] = useState('');

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalVal(searchVal);
  }, [searchVal]);

  const onSearchChange = (value: string) => {
    setLocalVal(value);
    onDebounceSearch(value);
  };

  const onClearSearch = () => {
    setLocalVal('');
    onDebounceSearch('');
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
