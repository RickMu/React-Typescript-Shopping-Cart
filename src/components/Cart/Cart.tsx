import * as React from "react";
import { CartProduct } from "../../common/business-models/CartProduct";
import { addCartProduct } from "../../dux/CartProduct/CartProductDispatcher";
import { CartProps } from "./CartContainer";
import CartProductContainer from "./CartProduct/CartProductContainer";
import "./style.scss";

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<CartProps, State> {

  public state = {
    isOpen: true,
  };

  public render(): React.ReactNode {
    const { isOpen } = this.state;
    const classes = isOpen ? "float-cart" : "float-cart float-cart--cart-close";
    const trolleyCss = isOpen ? "trolley" : "trolley trolley--cart-close";
    const trolleyItemQuantityCss = isOpen ? "item-quantity-icon" :  "item-quantity-icon item-quantity-icon--cart-close";

    const cartProducts = [];
// tslint:disable-next-line: forin
    for (const k in this.props.cartProducts) {
      cartProducts.push(this.props.cartProducts[k]);
    }
    const itemQuantity = cartProducts.reduce((sum: number, product: CartProduct) => {
      return sum + product.itemQuantity;
    }, 0);
    return (
      <div className={classes}>
        <div className="cart-close-button" onClick={this.toggleCartDrawer}>X</div>

        <div className="float-cart_content">
          <div className="float-cart_header">
            <div className={trolleyCss} onClick={this.toggleCartDrawer}>
              <span className={trolleyItemQuantityCss}>{itemQuantity}</span>
            </div>
            <span className="header-title">Cart</span>
          </div>
          <div className="cart-shelf">
            {cartProducts.map((value, index) => <CartProductContainer product={value} key={index}/>)}
          </div>
        </div>
      </div>
    );
  }

  private toggleCartDrawer = () => {
    this.setState((prevState: State) => ({isOpen: !prevState.isOpen}));
  }
}

export default Cart;
