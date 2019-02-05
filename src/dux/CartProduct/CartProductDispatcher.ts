import { Dispatch } from "redux";
import { CartProduct } from "../../common/models/CartProduct";
import { Product } from "../../common/models/Product";
import { AddCartProductAction, RemoveCartProductAction } from "./CartProductActions";


export const addCartProduct = (product: Product, quantity: number) => {
  const cartProduct: CartProduct = {
    ...product,
    itemQuantity: quantity,
  };
  return new AddCartProductAction(cartProduct);
};

export const removeCartProduct = (cartProduct: CartProduct, id: number) => (dispatch: Dispatch) => {
  dispatch(new RemoveCartProductAction(cartProduct, id));
};
