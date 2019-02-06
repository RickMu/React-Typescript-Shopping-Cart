import React, { Component } from "react";
import { CartProductProps } from "./CartProductContainer";
import "./style.scss";

interface State {
  isOverRemoveIcon: boolean;
}

class CartProductView extends Component<CartProductProps, State> {
  public state = {
    isOverRemoveIcon: false,
  };

  public render(): React.ReactNode {
    const { product } = this.props;
    const { isOverRemoveIcon } = this.state;
    const descCss = isOverRemoveIcon ? "desc desc--remove" : "desc";

    const priceCss = isOverRemoveIcon ? "price price--remove" : "price";

    return (
    <div className="cart-item">
      <div className="remove-icon" onMouseEnter={this.toggleMouseOverState} onMouseLeave={this.toggleMouseOverState}/>
      <div className="thumb">
        <img src={require(`../../../static/products/${product.sku}_2.jpg`)} alt={product.title} title={product.title} />
      </div>
      <div className="details">
        <p className="title">{product.title}</p>
        <p className={descCss}>
          {`${product.availableSizes[0]} | ${product.style}`} <br/>
          Quantity: {product.itemQuantity}
        </p>
      </div>
      <div className={priceCss}>
        <p>{`${product.currencyFormat}  ${product.price}`}</p>
      </div>
    </div>);
  }

  private toggleMouseOverState = () => {
    this.setState((prevState) => this.setState({isOverRemoveIcon: !prevState.isOverRemoveIcon}));
  }
}

export default CartProductView;
