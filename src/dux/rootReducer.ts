import { combineReducers, Reducer } from "redux";
import { cartProductReducer, CartProductState } from "./CartProduct/CartProductReducer";
import { filterReducer, FilterState } from "./Filter/FilterReducer";
import { productReducer, ProductState } from "./Product/ProductReducer";

export interface AppState {
  cartProducState: CartProductState;
  productState: ProductState;
  filterState: FilterState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  cartProducState: cartProductReducer,
  filterState: filterReducer,
  productState: productReducer,
});
