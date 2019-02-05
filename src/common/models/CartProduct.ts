import {Product} from "./Product";

// tslint:disable-next-line: interface-name
export interface CartProductOptions {
  itemQuantity: number;
}


export interface CartProduct extends CartProductOptions, Product {}
