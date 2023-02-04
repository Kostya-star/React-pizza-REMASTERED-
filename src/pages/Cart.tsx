import { ReactComponent as ArrowBackSVG } from 'assets/svg/arrow-back.svg';
import { ReactComponent as CarriageSVG } from 'assets/svg/carriage.svg';
import { ReactComponent as ClearSVG } from 'assets/svg/clear.svg';
import { CartEmpty } from 'components/CartEmpty/CartEmpty';
import { CartItem } from 'components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { cartSelector, clearCart } from 'redux/slices/cartSlice';
import { getAddedItemsCount } from 'utils/getAddedItemsCount';
import { getAddedItemsPrice } from 'utils/getAddedItemsPrice';

const Cart = () => {
  const { items } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const itemsCount = getAddedItemsCount(items);

  const totalPrice = getAddedItemsPrice(items);

  if (!items?.length) {
    return <CartEmpty />;
  }

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

export default Cart;
