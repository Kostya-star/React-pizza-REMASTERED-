import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { baseRequest } from 'api/baseRequest';
import axios from 'axios';
import qs from 'qs';
import { IPizza } from 'types/types';

export const PizzaDetails = () => {
  const [pizza, setPizza] = useState<IPizza | null>(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPizzaById = async () => {
      const resp = await axios.get(`${baseRequest}/${id}`).catch(e => {
        console.log(e);        
      })
      if(resp?.status === 200) {
        setPizza(resp.data)
      }        
    };
    void fetchPizzaById();
  }, []);

  return (
    <div className='pizza_details'>
      <img src={pizza?.imageUrl} alt="pizza" />
      <h2>{pizza?.title}</h2>
      <span>{pizza?.price} ₽ rub</span>
    </div>
  );
};
