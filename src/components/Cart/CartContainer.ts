import { connect } from "react-redux";
import { CartProduct } from "../../common/models/CartProduct";
import { Product } from "../../common/models/Product";
import { addCartProduct, removeCartProduct } from "../../dux/CartProduct/CartProductDispatcher";
import { getCartProducts } from "../../dux/CartProduct/CartProductSelector";
import { AppState } from "../../dux/rootReducer";
import Cart from "./Cart";

type addCartProductDispatchProp = (product: Product, quantity: number) => void;

interface DispatchProps {
  addCartProduct: addCartProductDispatchProp;
}

interface StateProps {
  cartProducts: CartProduct[];
}

export type CartProps = StateProps & DispatchProps;

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addCartProduct: (product: Product, quantity: number) => dispatch(addCartProduct(product, quantity)),
});

const mapStateToProps = (state: AppState): StateProps => ({
  cartProducts: getCartProducts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
