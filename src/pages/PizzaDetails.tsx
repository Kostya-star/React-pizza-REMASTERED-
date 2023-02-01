import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { baseRequest } from 'api/baseRequest';
import axios from 'axios';
import qs from 'qs';

export const PizzaDetails = () => {
  const { id } = useParams()
  useEffect(() => {
    const fetchPizzaById = async () => {
      const resp = await axios.get(`${baseRequest}/${id}`);
      console.log(resp);
    };
    void fetchPizzaById();
  }, []);

  return (
    <div>
      <img src="" alt="pizza" />
      <h2>pizza name</h2>
      <span>pizza price</span>
    </div>
  );
};
