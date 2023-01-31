import emptyCart from 'assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
import s from './CartEmpty.module.scss';

export const CartEmpty = () => {
  return (
    <div className={`cart ${s.cart__empty}`}>
      <h2>
        Empty Cart <span>😕</span>
      </h2>
      <p>
        You have not ordered a pizza yet.
        <br />
        Go to the main page if you want to order pizza.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/" className={`button ${s.button_black}`}>
        <span>Go home</span>
      </Link>
    </div>
  );
};
