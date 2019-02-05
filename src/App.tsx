import React, { Component } from "react";
import "./App.css";
import { CartProduct } from "./common/models/CartProduct";
import {Product} from "./common/models/Product";
import CartContainer from "./components/Cart/CartContainer";
import { AddCartProductAction } from "./dux/CartProduct/CartProductActions";
import rootStore from "./dux/rootStore";
import logo from "./logo.svg";
class App extends Component {
  public componentDidMount() {
    const product: CartProduct = {
      availableSizes : ["M"],
      currencyFormat : "AUD",
      currencyId : "$",
      description : "description",
      id : 123,
      installments : 123,
      isFreeShipping : true,
      itemQuantity : 1,
      price : 123,
      sku : 1234,
      style : "boom",
      title : "boom shirt",
    };

    rootStore.dispatch(new AddCartProductAction(product));
  }

  public render() {
    return (
      <div className="App">
        <CartContainer/>
      </div>
    );
  }
}

export default App;
