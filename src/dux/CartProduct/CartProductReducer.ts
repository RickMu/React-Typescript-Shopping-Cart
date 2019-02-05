import { CartProduct } from "../../common/models/CartProduct";
import {
  AddCartProductAction,
  CartProductAction,
  CartProductActionTypes,
  RemoveCartProductAction } from "./CartProductActions";

export interface CartProductState {
  products: CartProduct[];
}

const initialState: CartProductState = {
  products: [],
};

// tslint:disable-next-line: max-line-length
export function cartProductReducer(state: CartProductState = initialState, action: CartProductAction): CartProductState {

  switch (action.type) {
    case CartProductActionTypes.ADD_PRODUCT: {
      const product = (action as AddCartProductAction).product;
      const products = state.products.concat(product);
      return {
        ...state,
        products,
      };
    }

    case CartProductActionTypes.REMOVE_PRODUCT: {
      const products = [...state.products];
      const id = (action as RemoveCartProductAction).id;
      products.splice(id, 1);
      return {
        ...state,
        products,
      };
    }

    default:
      return state;
  }
}
