import { createSelector } from "reselect";
import { AppState } from "../rootReducer";
import { SortState } from "./SortReducer";

const getSortState = (state: AppState) => state.sortState;

export const getSortBy = createSelector(
  getSortState,
  (state: SortState) => state.sortBy,
);
