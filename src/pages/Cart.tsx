import { ReactComponent as CarriageSVG } from 'assets/svg/carriage.svg';
import { ReactComponent as ClearSVG } from 'assets/svg/clear.svg';
import { ReactComponent as DecrementSVG } from 'assets/svg/decrement.svg';
import { ReactComponent as IncrementSVG } from 'assets/svg/increment.svg';
import { ReactComponent as DeleteSVG } from 'assets/svg/delete.svg';
import { ReactComponent as ArrowBackSVG } from 'assets/svg/arrow-back.svg';
import { Link } from 'react-router-dom';

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
        <div className="cart__items">
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Чизбургер-пицца</h3>
              <p>тонкое, 26 см.</p>
            </div>
            <div className="cart__item-count">
              <button className="button button--outline button--circle cart__item-count-minus">
                <DecrementSVG />
              </button>
              <b>1</b>
              <button className="button button--outline button--circle cart__item-count-plus">
                <IncrementSVG />
              </button>
            </div>
            <div className="cart__item-price">
              <b>415 ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <DeleteSVG />
              </div>
            </div>
          </div>
        </div>
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
              className="button button--outline button--add go-back-btn"
            >
              <ArrowBackSVG />
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
