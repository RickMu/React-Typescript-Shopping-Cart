import { combineReducers, Reducer } from "redux";
import { cartProductReducer, CartProductState } from "./CartProduct/CartProductReducer";

export interface AppState {
  cartProducState: CartProductState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  cartProducState: cartProductReducer,
});
