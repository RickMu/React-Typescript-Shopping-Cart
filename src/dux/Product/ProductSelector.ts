import { createSelector } from "reselect";
import SortService from "../../common/services/SortService";
import { getFilteredSizes } from "../Filter/FilterSelector";
import { AppState } from "../rootReducer";
import { getSortBy } from "../Sort/SortSelector";
import { ProductState } from "./ProductReducer";

const getProductState = (state: AppState) => state.productState;

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products,
);


export const getFilteredProducts = createSelector(
  getProducts,
  (state: AppState) => new Set(getFilteredSizes(state)),
  (products, filters) => {
    return products = products.filter((value) => {
      // tslint:disable-next-line: forin
          for (const index in value.availableSizes) {
            if (!filters.has(value.availableSizes[index])) {
              return true;
            }
          }
          return false;
        });
  },
);

export const getSortedProducts = createSelector(
  getFilteredProducts,
  getSortBy,
  (product, sortBy) => SortService.sort(product, sortBy),
);
