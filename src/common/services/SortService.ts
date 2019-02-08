import React from "react";
import { Product } from "../business-models/Product";

export enum SortType {
  LOWEST_PRICE_FIRST = "lowest price",
  HIGHEST_PRICE_FIRST = "highest price",
  DEFAULT = "",
}

export class SortBy {
  constructor(public type: SortType) {}
}

class SortService {

  public sort(products: Product[], sort: SortBy) {
    switch (sort.type) {
      case SortType.HIGHEST_PRICE_FIRST:

        return products.sort((a, b) => {
          if (a.price > b.price) { return -1; }
          if (a.price < b.price) { return 1; }
          return 0;
        });
      case SortType.LOWEST_PRICE_FIRST:

        return products.sort((a, b) => {
          if (a.price < b.price) { return -1; }
          if (a.price > b.price) { return 1; }
          return 0;
        });
      default:
        return products;
    }
  }
}

export default new SortService();
