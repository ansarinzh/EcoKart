import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_QTY,
  CLEAR_CART,
  CURRENT_USER_SET,
} from '../Constants';

export const AddToCart = payload => {
  console.log('ppp', payload);
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const RemoveFromCart = id => {
  // console.log('iddddd', id);
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const RemoveQtyItem = item => {
  return {
    type: REMOVE_QTY,
    payload: item,
  };
};
export const ClearCart = () => {
  console.log("lkk");
  return {
    type: CLEAR_CART,
  };
};

export const currentUserSet = value => {
  console.log('actionvalue', value);
  return {
    payload: value,
    type: CURRENT_USER_SET,
  };
};
