import { combineReducers, Reducer } from "redux";
import { cartProductReducer, CartProductState } from "./CartProduct/CartProductReducer";
import { productReducer, ProductState } from "./Product/ProductReducer";

export interface AppState {
  cartProducState: CartProductState;
  productState: ProductState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  cartProducState: cartProductReducer,
  productState: productReducer,
});
