import { CartProduct } from "../../common/business-models/CartProduct";
import { AddCartProductAction, CartProductAction, RemoveCartProductAction } from "./CartProductActions";
import { cartProductReducer } from "./CartProductReducer";

describe(cartProductReducer.name, () => {

  it("should initialize with default values", () => {
    const state = cartProductReducer({ products: {} }, {} as CartProductAction);

    expect(state).toEqual({ products: [] });
  });

  it("should return unmodified state for an unkown function", () => {

    const initialState = { products: {} };
    const unkownAction = {} as CartProductAction;
    const newState = cartProductReducer( initialState, unkownAction);

    expect(newState).toEqual(initialState);
  });

  describe(AddCartProductAction.name, () => {

    it("should add new item to items", () => {
      const item = getCartProduct(1);

      const state = cartProductReducer({ products: {} }, new AddCartProductAction(item));

      expect(state).toEqual({ products: [item]});

      expect(state.products[0]).toBe(item);
    });
  });

  // describe(RemoveCartProductAction.name, () => {

  //   it("should remove item from list of items", () => {
  //     const items = [getCartProduct(1), getCartProduct(2), getCartProduct(3)];

  //     const removeItemAction = new RemoveCartProductAction(items[1], 1);

  //     const newState = cartProductReducer({ products: items }, removeItemAction);

  //     expect(newState.products.length).toBe(items.length - 1);
  //     expect(newState).toEqual({
  //       products: [items[0], items[2]],
  //     });
  //   });
  // });
});

function getCartProduct(price: number): CartProduct {
  const product: CartProduct = {
    availableSizes: ["S", "M"],
    currencyFormat: "$",
    currencyId: "AUD",
    description: "Fake Product",
    id: 1,
    installments: 1,
    isFreeShipping: true,
    itemQuantity: 10,
    price,
    sku: 1232142,
    style: "good style",
    title: "sweater",
  };
  return product;
}
