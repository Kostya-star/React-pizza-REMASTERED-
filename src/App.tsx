import { MainLayout } from 'layouts/MainLayout';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

const Cart = lazy(async () => await import(/* webpackChunkName: 'Cart' */ './pages/Cart'));
const PizzaDetails = lazy(async () => await import(/* webpackChunkName: 'PizzaDetails' */ './pages/PizzaDetails'));

const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Cart is loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense>
              <PizzaDetails />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
