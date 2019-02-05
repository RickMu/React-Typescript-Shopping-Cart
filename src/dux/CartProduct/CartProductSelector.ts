import { createSelector } from "reselect";
import { AppState } from "../rootReducer";
import { CartProductState } from "./CartProductReducer";

const getCartState = (state: AppState) => state.cartProducState;

export const getCartProducts = createSelector(
  getCartState,
  (cartState: CartProductState) => cartState.products,
);
