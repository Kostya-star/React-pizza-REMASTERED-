import { ReactComponent as CartSVG } from 'assets/svg/cart.svg';
import { ReactComponent as PizzaLogo } from 'assets/svg/pizza-logo.svg';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
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
      <div className="header__cart">
        <Link to="/cart" className="button button--cart">
          <span>520 ₽</span>
          <div className="button__delimiter"></div>
          <CartSVG />
          <span>3</span>
        </Link>
      </div>
    </div>
  );
};
