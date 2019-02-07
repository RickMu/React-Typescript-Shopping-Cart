import { Action } from "redux";
import { Product } from "../../common/business-models/Product";

export enum ProductActionType {
  PRODUCT_FETCHED = "[PRODUCT] fetched",
}

export class ProductFetchedAction implements Action {
  public type: ProductActionType = ProductActionType.PRODUCT_FETCHED;
  constructor(public products: Product[]) {}
}

export type ProductActions = ProductFetchedAction;
