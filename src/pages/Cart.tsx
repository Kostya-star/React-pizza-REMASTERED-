import { ReactComponent as CarriageSVG } from 'assets/svg/carriage.svg';
import { ReactComponent as ClearSVG } from 'assets/svg/clear.svg';
import { ReactComponent as ArrowBackSVG } from 'assets/svg/arrow-back.svg';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/CartItem/CartItem';

export const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CarriageSVG />
            Корзина
          </h2>
          <div className="cart__clear">
            <ClearSVG />
            <span>Очистить корзину</span>
          </div>
        </div>
        <CartItem/>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>4 шт.</b>{' '}
            </span>
            <span>
              Сумма заказа: <b>1898 ₽</b>{' '}
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
