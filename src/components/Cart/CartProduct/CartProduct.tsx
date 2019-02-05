import React, { PureComponent } from "react";
import { CartProductProps } from "./CartProductContainer";
import "./style.scss";

class CartProductView extends PureComponent<CartProductProps> {

  public render(): React.ReactNode {
    const { product } = this.props;
    return (
    <div className="shelf-item">
      {/* <div>
        <img src={require(`../../../static/products/${product.sku}_2.jpg`)} alt={product.title} title={product.title} />
      </div> */}
      <div className="details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br/>
          Quantity: {product.itemQuantity}
        </p>
        <div className="price">
          <p>{`${product.currencyFormat}  ${product.price}`}</p>
        </div>
      </div>
    </div>);
  }
}

export default CartProductView;
