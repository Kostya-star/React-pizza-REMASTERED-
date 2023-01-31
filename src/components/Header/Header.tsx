import { ReactComponent as CartSVG } from 'assets/svg/cart.svg';
import { ReactComponent as PizzaLogo } from 'assets/svg/pizza-logo.svg';
import { InputSearch } from 'components/InputSearch/InputSearch';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSearchValue } from 'redux/slices/homeSlice';
import s from './Header.module.scss';

export const Header: FC = () => {
  const { searchVal, itemsCount, itemsTotalPrice } = useAppSelector(
    ({ home, cart }) => ({
      searchVal: home.searchValue,
      itemsCount: cart.items.length,
      itemsTotalPrice: cart.totalPrice,
    }),
  );
  const dispatch = useAppDispatch();

  const onInputSearchChange = (value: string) => {
    dispatch(setSearchValue(value));
  };

  return (
    <div className={s.header}>
      <Link to="">
        <div className={s.header__logo}>
          <PizzaLogo />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <InputSearch searchVal={searchVal} onSetSearchVal={onInputSearchChange} />
      <div className="header__cart">
        <Link to="/cart" className="button button--cart">
          <span>{itemsTotalPrice} ₽</span>
          <div className="button__delimiter"></div>
          <CartSVG />
          <span>{itemsCount}</span>
        </Link>
      </div>
    </div>
  );
};
