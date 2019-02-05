import { connect } from "react-redux";
import { CartProduct } from "../../../common/models/CartProduct";
import { removeCartProduct } from "../../../dux/CartProduct/CartProductDispatcher";
import CartProductView from "./CartProduct";


type removeCartProductDispatchProp = (cartProduct: CartProduct, id: number) => void;

interface DispatchProp {
  removeCartProduct: removeCartProductDispatchProp;
}

interface Prop {
  product: CartProduct;
  key: number;
}

export type CartProductProps = DispatchProp & Prop;

const mapDispatchToProps = (dispatch): DispatchProp => ({
  removeCartProduct: (cartProduct: CartProduct, id: number ) => dispatch(removeCartProduct(cartProduct, id)),
});

export default connect(null, mapDispatchToProps)(CartProductView);

