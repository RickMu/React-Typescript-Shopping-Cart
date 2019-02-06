import { createSelector } from "reselect";
import { AppState } from "../rootReducer";
import { ProductState } from "./ProductReducer";

const getProductState = (state: AppState) => state.productState;

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products,
);
