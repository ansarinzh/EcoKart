import {
  ADD_TO_CART,
  CLEAR_CART,
  CURRENT_USER_SET,
  REMOVE_FROM_CART,
  REMOVE_QTY,
} from '../Constants';

const initialState = {
  carts: [],
  user: '',
};

export const CartReducer = (state = initialState, action) => {
  console.log('actionreducer', action);
  switch (action.type) {
    // *************** To add item into the cart **************

    case ADD_TO_CART:
      const itemIndex = state.carts.findIndex(
        item => item.id === action?.payload.id,
      );
      // console.log('iterm', itemIndex);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = {...action.payload, qty: 1};
        return {...state, carts: [...state.carts, temp]};
      }

    // ************ To remove item from cart ***************
    case REMOVE_FROM_CART:
      const data = state.carts.filter(el => el.id !== action.payload);
      // console.log('REMOVE_FROM', data);
      return {...state, carts: data};

    // ************ To remove quantity of product from cart page ************
    case REMOVE_QTY:
      const qtyItemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      );
      if (state.carts[qtyItemIndex].qty > 1) {
        const deleteItems = (state.carts[qtyItemIndex].qty -= 1);
        return {...state, deleteItems, carts: [...state.carts]};
      } else if (state.carts[qtyItemIndex].qty == 1) {
        const data = state.carts.filter(el => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }

    case CLEAR_CART:
      let returnData = {
        ...state,
        carts: initialState.carts,
      };
      return returnData;

    case CURRENT_USER_SET:
      return {user: action.payload};
    default:
      return state;
  }
};
