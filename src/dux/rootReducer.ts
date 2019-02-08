import { combineReducers, Reducer } from "redux";
import { cartProductReducer, CartProductState } from "./CartProduct/CartProductReducer";
import { filterReducer, FilterState } from "./Filter/FilterReducer";
import { productReducer, ProductState } from "./Product/ProductReducer";
import { sortReducer, SortState } from "./Sort/SortReducer";

export interface AppState {
  cartProducState: CartProductState;
  productState: ProductState;
  filterState: FilterState;
  sortState: SortState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  cartProducState: cartProductReducer,
  filterState: filterReducer,
  productState: productReducer,
  sortState: sortReducer,
});
