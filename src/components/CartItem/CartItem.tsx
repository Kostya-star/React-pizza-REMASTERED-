import { ReactComponent as DeleteSVG } from 'assets/svg/delete.svg';
import { ReactComponent as MinusSVG } from 'assets/svg/minus.svg';
import { ReactComponent as PlusSVG } from 'assets/svg/plus.svg';
import { FC } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { deleteItem, minusPlusItem } from 'redux/slices/cartSlice';
import { ICartItem } from 'types';
import s from './CartItem.module.scss';

interface ICartItemProps extends ICartItem {}

export const CartItem: FC<ICartItemProps> = ({
  id,
  imageUrl,
  title,
  price,
  type,
  size,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onMinusPlusHandle = (id: number, val: string) => {
    dispatch(minusPlusItem({ id, val }))
  };

  return (
    <div className={s.cart__item}>
      <div className={s.cart__item_img}>
        <img src={imageUrl} alt="Pizza" />
      </div>
      <div className={s.cart__item_info}>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className={s.cart__item_count}>
        <button
          onClick={() => onMinusPlusHandle(id, 'minus')}
          className={s.cart__item_btn}
        >
          <MinusSVG />
        </button>
        <b>{count}</b>
        <button
          onClick={() => onMinusPlusHandle(id, 'plus')}
          className={s.cart__item_btn}
        >
          <PlusSVG />
        </button>
      </div>
      <div className={s.cart__item_price}>
        <b>{price * count} ₽</b>
      </div>
      <div className={s.cart__item_remove}>
        <button
          onClick={() => dispatch(deleteItem(id))}
          className={`${s.cart__item_btn} ${s.cart__item_btn_clear}`}
        >
          <DeleteSVG />
        </button>
      </div>
    </div>
  );
};
