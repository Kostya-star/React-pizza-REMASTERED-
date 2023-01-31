import { ReactComponent as CarriageSVG } from 'assets/svg/carriage.svg';
import { ReactComponent as ClearSVG } from 'assets/svg/clear.svg';
import { ReactComponent as ArrowBackSVG } from 'assets/svg/arrow-back.svg';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/CartItem/CartItem';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { clearCart } from 'redux/slices/cartSlice'

export const Cart = () => {
  const { items } = useAppSelector(({ cart }) => cart)
  const dispatch = useAppDispatch()

  const itemsCount = items.reduce((sum, item) => item.count + sum, 0)

  const totalPrice = items.reduce((sum, item) => (item.count * item.price) + sum, 0)

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CarriageSVG />
            Корзина
          </h2>
          <button onClick={() => dispatch(clearCart())} className="cart__clear"> 
            <ClearSVG />
            <span>Очистить корзину</span>
          </button>
        </div>
        {
          items.map(item => (
            <CartItem key={item.id} {...item}/>
          ))
        }
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{itemsCount} шт.</b>{' '}
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>{' '}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button go-back-btn"
            >
              <ArrowBackSVG />
              <span>Вернуться назад</span>
            </Link>
            <button className="button pay-btn">
              <span>Оплатить сейчас</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
