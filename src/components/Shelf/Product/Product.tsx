import React from "react";
import { Product } from "../../../common/business-models/Product";
import { AddCartProduct } from "../ShelfContainer";
import "./style.scss";

interface Props {
  product: Product;
  addToCart: AddCartProduct;
  key: number;
}

const ProductView: React.FunctionComponent<Props> = ({product, addToCart}) => {

  const formattedPrice = product.price;
  let productInstallment;

  if (!!product.installments) {
    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {product.currencyId}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item"
      onClick={() => addToCart(product, 1)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <div className="shelf-item__thumb">
        <img src={require(`../../../static/products/${product.sku}_1.jpg`)}
          alt={product.title} title={product.title}/>
      </div>
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice}</b>
          <span>{formattedPrice}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

export default ProductView;
