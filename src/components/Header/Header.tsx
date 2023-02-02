import { ReactComponent as CartSVG } from 'assets/svg/cart.svg';
import { ReactComponent as PizzaLogo } from 'assets/svg/pizza-logo.svg';
import { InputSearch } from 'components/InputSearch/InputSearch';
import debounce from 'lodash.debounce';
import { FC, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSearchValue } from 'redux/slices/homeSlice';
import s from './Header.module.scss';

export const Header: FC = () => {
  const location = useLocation();

  const { search, items, status } = useAppSelector(({ home, cart }) => ({
    search: home.search,
    status: home.status,
    items: cart.items
  }));
  const dispatch = useAppDispatch();

  const itemsCount = items.reduce((sum, item) => item.count + sum, 0);

  const totalPrice = items.reduce(
    (sum, item) => item.count * item.price + sum,
    0,
  );

  const onDebouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 700), []);

  return (
    <div className={s.header}>
      <Link to="" className={location.pathname === '/' ? s.link_disabled : ''}>
        <div className={s.header__logo}>
          <PizzaLogo />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      {location.pathname === '/' && (
        <>
          <InputSearch
            searchVal={search}
            onDebounceSearch={onDebouncedSearch}
          />
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <CartSVG />
              <span>{itemsCount}</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
