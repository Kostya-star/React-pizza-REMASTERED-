import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchPizzaById } from 'redux/slices/pizzaDetailsSlice';
import { Status } from 'types/enum';
import { useAppDispatch, useAppSelector } from './../redux/hooks';

export const PizzaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { pizza, status } = useAppSelector(({ pizzaDetails }) => ({
    pizza: pizzaDetails.item,
    status: pizzaDetails.status,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchPizzaById(Number(id)));
  }, []);

  if (status === Status.ERROR) {
    alert('Sorry, something went wrong!');
    navigate('/');
    return null;
  }

  return (
    <>
      <div className="pizza_details">
        {status === Status.LOADING ? (
          <div>Loading...</div>
        ) : (
          <>
            <img src={pizza?.imageUrl} alt="pizza" />
            <h2>{pizza?.title}</h2>
            <span>{pizza?.price} ₽ rub</span>
          </>
        )}
      </div>
      <Link to="/" className="button" style={{ fontSize: '20px' }}>
        Go home
      </Link>
    </>
  );
};
