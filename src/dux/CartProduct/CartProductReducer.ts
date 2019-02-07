import { CartProduct } from "../../common/business-models/CartProduct";
import { Dictionary } from "../../common/models/dictionary";
import {
  AddCartProductAction,
  CartProductAction,
  CartProductActionTypes,
  RemoveCartProductAction } from "./CartProductActions";

export interface CartProductState {
  products: Dictionary<CartProduct>;
}

const initialState: CartProductState = {
  products: {},
};

// tslint:disable-next-line: max-line-length
export function cartProductReducer(state: CartProductState = initialState, action: CartProductAction): CartProductState {

  switch (action.type) {
    case CartProductActionTypes.ADD_PRODUCT: {
      const product = (action as AddCartProductAction).product;

      if (state.products[product.sku.toString()]) {
        product.itemQuantity += state.products[product.sku.toString()].itemQuantity;
      }

      return {
        ...state,
        products: {
          ...state.products,
          [product.sku.toString()]: product,
        },
      };
    }

    case CartProductActionTypes.REMOVE_PRODUCT: {
      const id = (action as RemoveCartProductAction).id;
      const products = {...state.products};
      delete products[id];

      return {
        ...state,
        products,
      };
    }

    default:
      return state;
  }
}
