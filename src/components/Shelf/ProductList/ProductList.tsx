import React from "react";
import { connect } from "react-redux";
import { Product } from "../../../common/business-models/Product";
import { addCartProduct } from "../../../dux/CartProduct/CartProductDispatcher";
import { AddCartProduct } from "../ShelfContainer";
import ProductView from "./Product";

interface Props {
  products: Product[];
  addToCart: AddCartProduct;
}

const ProductList: React.FunctionComponent<Props> = ({products, addToCart}) => {
  return (
    <React.Fragment>
        {products.map((value: Product, index: number) => {
          return (
            <ProductView product={value} key={index} addToCart={addToCart}/>
          );
        })}
    </React.Fragment>
  );
};

export default ProductList;



