import { connect } from "react-redux";
import { Product } from "../../common/business-models/Product";
import { addCartProduct } from "../../dux/CartProduct/CartProductDispatcher";
import { getFilteredSizes } from "../../dux/Filter/FilterSelector";
import { getFilteredProducts, getProducts } from "../../dux/Product/ProductSelector";
import { AppState } from "../../dux/rootReducer";
import Shelf from "./Shelf";

export type AddCartProduct = (product: Product, quantity: number) => void;

interface StateProps {
  products: Product[];
  filteredSizes: Set<string>;
}

interface DispatchProps {
  addToCart: AddCartProduct;
}

const mapStateToProps = (state: AppState): StateProps => ({
  filteredSizes: new Set(getFilteredSizes(state)),
  products: getFilteredProducts(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addToCart: (product: Product, quantity: number) => dispatch(addCartProduct(product, quantity)),
});

export type ShelfProp = StateProps & DispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
