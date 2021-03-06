import {Product} from "../../common/business-models/Product";
import { Dictionary } from "../../common/models/dictionary";
import { ProductActions, ProductActionType } from "./ProductActions";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export function productReducer(state: ProductState = initialState, action: ProductActions) {

  switch (action.type) {

    case ProductActionType.PRODUCT_FETCHED:

      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
}
