import { SearchContext } from 'App';
import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { ReactComponent as SearchGlassSVG } from 'assets/svg/search-glass.svg';
import { FC } from 'react';
import s from './InputSearch.module.scss';

export const InputSearch: FC = () => {
  return (
    <SearchContext.Consumer>
      {({ searchVal, setSearchVal }) => {
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
      }}
    </SearchContext.Consumer>
  );
};
