import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { addFilteredSize, removeFilteredSize } from "../../../dux/Filter/FilterDispatcher";
import { getFilteredSizes } from "../../../dux/Filter/FilterSelector";
import { AppState } from "../../../dux/rootReducer";
import Filter from "./filter";

type AddFilteredSize = (size: string) => void;
type RemoveFilteredSize = (size: string) => void;

interface DispatchProps {
  addFilteredSize: AddFilteredSize;
  removeFilteredSize: RemoveFilteredSize;
}

interface StateProps {
  filteredSizes: Set<string>;
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addFilteredSize: (size: string) => dispatch(addFilteredSize(size)),
  removeFilteredSize: (size: string) => dispatch(removeFilteredSize(size)),
});

const mapStateToProps = (state: AppState): StateProps => ({
  filteredSizes: new Set(getFilteredSizes(state)),
});

export type FilterProp = DispatchProps & StateProps;

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
