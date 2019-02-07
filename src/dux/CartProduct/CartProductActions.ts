import {Action} from "redux";
import {CartProduct} from "../../common/business-models/CartProduct";

export enum CartProductActionTypes {
  ADD_PRODUCT = "[CART_PRODUCT] Add",
  REMOVE_PRODUCT = "[CART_PRODUCT] Remove",
}

export class AddCartProductAction implements Action {
  public readonly type: CartProductActionTypes = CartProductActionTypes.ADD_PRODUCT;
  constructor(public product: CartProduct) {}
}

export class RemoveCartProductAction implements Action {
  public readonly type: CartProductActionTypes = CartProductActionTypes.REMOVE_PRODUCT;
  constructor(public product: CartProduct, public id: number) {}
}

export type CartProductAction = AddCartProductAction | RemoveCartProductAction;
