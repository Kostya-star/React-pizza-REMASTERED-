import { ReactComponent as DecrementSVG } from 'assets/svg/minus.svg';
import { ReactComponent as IncrementSVG } from 'assets/svg/plus.svg';
import { ReactComponent as DeleteSVG } from 'assets/svg/delete.svg';
import s from './CartItem.module.scss'

export const CartItem = () => {
  return (
    <div className={s.cart__item}>
      <div className={s.cart__item_img}>
        <img
          src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className={s.cart__item_info}>
        <h3>Чизбургер-пицца</h3>
        <p>тонкое, 26 см.</p>
      </div>
      <div className={s.cart__item_count}>
        <button className={s.cart__item_btn}>
          <DecrementSVG />
        </button>
        <b>1</b>
        <button className={s.cart__item_btn}>
          <IncrementSVG />
        </button>
      </div>
      <div className={s.cart__item_price}>
        <b>415 ₽</b>
      </div>
      <div className={s.cart__item_remove}>
        <button className={`${s.cart__item_btn} ${s.cart__item_btn_clear}`}>
          <DeleteSVG />
        </button>
      </div>
    </div>
  );
};
