import React, { PureComponent } from "react";
import ProductList from "./ProductList/ProductList";
import { ShelfProp } from "./ShelfContainer";
import ShelfHeader from "./ShelfHeader/ShelfHeader";


class Shelf extends PureComponent<ShelfProp> {

  public render(): React.ReactNode {
    return(
      <div className="cart-shelf-container">
        <ShelfHeader productsLength={this.props.products.length}/>
        <ProductList products={this.props.products} addToCart={this.props.addToCart}/>
      </div>
    );
  }
}

export default Shelf;
