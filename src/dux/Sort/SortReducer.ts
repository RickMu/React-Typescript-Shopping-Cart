import { SortBy, SortType } from "../../common/services/SortService";
import { SortActions, SortActionTypes } from "./SortAction";

export interface SortState {
  sortBy: SortBy;
}

const initialState: SortState = {
  sortBy: new SortBy(SortType.DEFAULT),
};

export const sortReducer = (state: SortState = initialState, action: SortActions) => {

  switch (action.type) {
    case SortActionTypes.UPDATE_SORT_BY:
      return {
        sortBy: action.sortBy,
      };

    default:
      return state;
  }
};

