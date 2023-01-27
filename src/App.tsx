import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './scss/app.scss';

interface ISearchContext {
  searchVal: string
  setSearchVal: (val: string) => void
}

export const SearchContext = createContext({} as ISearchContext)

const App = () => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <SearchContext.Provider value={{ searchVal, setSearchVal }}>
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default App;
