import React, { PureComponent } from "react";
import Filter from "./Filter/filter";
import ProductList from "./ProductList/ProductList";
import { ShelfProp } from "./ShelfContainer";
import ShelfHeader from "./ShelfHeader/ShelfHeader";
import "./style.scss";

class Shelf extends PureComponent<ShelfProp> {

  public render(): React.ReactNode {
    return(
      <React.Fragment>
        <div className="shelf">

        <Filter/>
        <div className="shelf-container">
          <ShelfHeader productsLength={this.props.products.length}/>
          <ProductList products={this.props.products} addToCart={this.props.addToCart}/>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shelf;
