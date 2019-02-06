import React, { Component } from "react";
import "./App.css";
import { CartProduct } from "./common/models/CartProduct";
import {Product} from "./common/models/Product";
import CartContainer from "./components/Cart/CartContainer";
import ShelfContainer from "./components/Shelf/ShelfContainer";
import { AddCartProductAction } from "./dux/CartProduct/CartProductActions";
import { setProducts } from "./dux/Product/ProductDispatcher";
import rootStore from "./dux/rootStore";
import logo from "./logo.svg";
class App extends Component {
  public componentDidMount() {
    const cartProduct: CartProduct = {
      availableSizes: ["S", "XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 12,
      installments: 9,
      isFreeShipping: true,
      itemQuantity: 1,
      price: 10.9,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
    };

    const product: Product = {
      availableSizes: ["S", "XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 12,
      installments: 9,
      isFreeShipping: true,
      price: 10.9,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
    };

    rootStore.dispatch(new AddCartProductAction(cartProduct));
    rootStore.dispatch(setProducts([product]));
  }

  public render() {
    return (
      <div className="App">
        <CartContainer/>
        <ShelfContainer/>
      </div>
    );
  }
}

export default App;
