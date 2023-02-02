import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import { memo, useRef, useState } from 'react';
import s from './InputSearch.module.scss';

interface InputSearchProps {
  searchVal: string;
  onDebounceSearch: (val: string) => void;
}

export const InputSearch = memo(
  ({ searchVal, onDebounceSearch }: InputSearchProps) => {
    InputSearch.displayName = 'InputSearch';
    const [localVal, setLocalVal] = useState(searchVal);
    
    const searchRef = useRef<HTMLInputElement>(null);

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
  },
);
