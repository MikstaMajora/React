import axios from 'axios';

export const getCity = city => {
  console.log('call');
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=72456375f61f475833df3addc204f85b`,
    )
    .catch(err => console.log(err));
};
