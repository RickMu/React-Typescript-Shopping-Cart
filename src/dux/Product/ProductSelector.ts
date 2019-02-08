import { createSelector } from "reselect";
import { getFilteredSizes } from "../Filter/FilterSelector";
import { AppState } from "../rootReducer";
import { ProductState } from "./ProductReducer";

const getProductState = (state: AppState) => state.productState;

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products,
);


export const getFilteredProducts = (state: AppState) => {
  const filteredSizes = new Set(getFilteredSizes(state));
  const products = getProducts(state).filter((value) => {
// tslint:disable-next-line: forin
    for (const index in value.availableSizes) {
      if (!filteredSizes.has(value.availableSizes[index])) {
        return true;
      }
    }
    return false;
  });

  return products;
};
