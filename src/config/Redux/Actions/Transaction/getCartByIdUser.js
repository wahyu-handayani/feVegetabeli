import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

// const URL_STRING = `http://192.168.6.169:5000/market`;

export const getCartByIdUser = (token, id_user) => {
  return {
    type: 'GET_CART_BY_ID_USER',
    payload: axios.get(`http://18.208.177.116:5000/cart/user/${id_user}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    }
    )
  };
};
