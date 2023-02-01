import s from './ServerError.module.scss';

export const ServerError = () => {
  return (
    <div className={s.error}>
      <h2>Some error occured😕</h2>
      <p>
        Unfortunately, there has been an error and pizzas could not be fetched{' '}
        <br /> Please, try again later
      </p>
    </div>
  );
};
