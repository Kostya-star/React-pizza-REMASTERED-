import s from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={s.notfound}>
      <span>😕</span>
      <h1>Nothing is found</h1>
      <p>Unfortunatelly, there is no such page in our shop</p>
    </div>
  );
};
