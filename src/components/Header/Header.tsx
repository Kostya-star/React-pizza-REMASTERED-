import { ReactComponent as CartSVG } from 'assets/svg/cart.svg';
import { ReactComponent as PizzaLogo} from 'assets/svg/pizza-logo.svg';
import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
        <div className={s.header__logo}>
          <PizzaLogo/>
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <CartSVG />
            <span>3</span>
          </a>
        </div>
    </div>
  );
};
