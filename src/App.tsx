import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './scss/app.scss';

const App = () => {
  const[searchVal, setSearchVal] = useState()
  return (
    <div className="wrapper">
      <div className="container">
        <Header searchVal={searchVal} setSearchVal={setSearchVal}/>
        <div className="content">
          <Routes>
            <Route path="" element={<Home searchVal={searchVal}/>} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
