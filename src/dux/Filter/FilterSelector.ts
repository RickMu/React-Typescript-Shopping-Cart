import { createSelector } from "reselect";
import { AppState } from "../rootReducer";
import { FilterState } from "./FilterReducer";

const getFilterState = (state: AppState) => state.filterState;

export const getFilteredSizes = createSelector(
  getFilterState,
  (state: FilterState) => state.filteredSizes,
);
