import { Product } from "../../common/business-models/Product";
import { ProductFetchedAction } from "./ProductActions";

export const setProducts = (products: Product[]) => {
  return new ProductFetchedAction(products);
};
