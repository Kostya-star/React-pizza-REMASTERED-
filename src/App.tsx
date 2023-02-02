import { MainLayout } from 'layouts/MainLayout';
import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { PizzaDetails } from 'pages/PizzaDetails';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<PizzaDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
