import { connect } from "react-redux";
import { Product } from "../../common/business-models/Product";
import SortService, { SortBy } from "../../common/services/SortService";
import { addCartProduct } from "../../dux/CartProduct/CartProductDispatcher";
import { getFilteredSizes } from "../../dux/Filter/FilterSelector";
import { getFilteredProducts, getProducts, getSortedProducts } from "../../dux/Product/ProductSelector";
import { AppState } from "../../dux/rootReducer";
import { getSortBy } from "../../dux/Sort/SortSelector";
import Shelf from "./Shelf";

export type AddCartProduct = (product: Product, quantity: number) => void;
export type GetSortedProduct = (products: Product[], sortBy: SortBy) => Product[];

interface StateProps {
  products: Product[];
  filteredSizes: Set<string>;
}

interface DispatchProps {
  addToCart: AddCartProduct;
}

const mapStateToProps = (state: AppState): StateProps => ({
  filteredSizes: new Set(getFilteredSizes(state)),
  products: getSortedProducts(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addToCart: (product: Product, quantity: number) => dispatch(addCartProduct(product, quantity)),
});

export type ShelfProp = StateProps & DispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
