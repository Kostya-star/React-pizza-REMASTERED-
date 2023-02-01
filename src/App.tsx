import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { PizzaDetails } from 'pages/PizzaDetails';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './scss/app.scss';

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<PizzaDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
