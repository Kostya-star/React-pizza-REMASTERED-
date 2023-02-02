import { ReactComponent as CarriageSVG } from 'assets/svg/carriage.svg';
import { ReactComponent as ClearSVG } from 'assets/svg/clear.svg';
import { ReactComponent as ArrowBackSVG } from 'assets/svg/arrow-back.svg';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/CartItem/CartItem';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { clearCart, cartSelector } from 'redux/slices/cartSlice';
import { CartEmpty } from 'components/CartEmpty/CartEmpty';

export const Cart = () => {
  const { items } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const itemsCount = items.reduce((sum, item) => item.count + sum, 0);

  const totalPrice = items.reduce(
    (sum, item) => item.count * item.price + sum,
    0,
  );

  if (!items?.length) {
    return <CartEmpty />;
  }
  console.log(items);

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CarriageSVG />
            Cart
          </h2>
          <button onClick={() => dispatch(clearCart())} className="cart__clear">
            <ClearSVG />
            <span>Clear cart</span>
          </button>
        </div>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Total count: <b>{itemsCount} pcs.</b>{' '}
            </span>
            <span>
              Amount to be paid: <b>{totalPrice} ₽</b>{' '}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button go-back-btn">
              <ArrowBackSVG />
              <span>Go home</span>
            </Link>
            <button className="button pay-btn">
              <span>Pay now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
