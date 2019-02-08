import React, { Component } from "react";
import { Product } from "../../common/business-models/Product";
import FilterContainer from "./Filter/FilterContainer";
import ProductView from "./Product/Product";
import { ShelfProp } from "./ShelfContainer";
import ShelfHeader from "./ShelfHeader/ShelfHeader";
import "./style.scss";

interface State {
  selectedSizes: string[];
  allSelected: boolean;
}

class Shelf extends Component<ShelfProp, State> {

  public render(): React.ReactNode {

    return(
      <React.Fragment>
        <div className="shelf">

        <FilterContainer/>
        <div className="shelf-container">
          <ShelfHeader productsLength={this.props.products.length}/>
          {this.props.products.map((value: Product, index: number) => {
            return (
              <ProductView product={value} key={index} addToCart={this.props.addToCart}/>
            );
          })}
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shelf;
