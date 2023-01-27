import { FC } from 'react';
import s from './InputSearch.module.scss';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';

interface InputSearchProps {
  searchVal: string;
  setSearchVal: (val: string) => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  searchVal,
  setSearchVal,
}) => {
  return (
    <div className={s.search}>
      <SearchGlassSVG />
      <input
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        type="text"
        placeholder="Search"
      />
      {searchVal && <CloseSVG onClick={() => setSearchVal('')} />}
    </div>
  );
};
