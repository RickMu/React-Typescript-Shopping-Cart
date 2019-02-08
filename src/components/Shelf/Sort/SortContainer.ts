import { connect } from "react-redux";
import { SortBy } from "../../../common/services/SortService";
import { UpdateSortAction } from "../../../dux/Sort/SortAction";
import Sort from "./Sort";

type updateSortBy = (sortBy: SortBy) => void;

interface DispatchProps {
  updateSort: updateSortBy;
}
const mapDispatchToProps = (dispatch): DispatchProps => ({
  updateSort: (sortBy) => dispatch(new UpdateSortAction(sortBy)),
});

export type SortProps = DispatchProps;

export default connect(null, mapDispatchToProps)(Sort);
