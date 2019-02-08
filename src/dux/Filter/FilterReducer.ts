import { AddFilterAction, FilterAction, FilterActionType } from "./FilterAction";

export interface FilterState {
  filteredSizes: string[];
}

const initialState = {
  filteredSizes: [],
};

export const filterReducer = (state: FilterState = initialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionType.ADD_FILTERED_SIZE:
      const setAdd = new Set(state.filteredSizes);
      setAdd.add(action.size);
      return {
        filteredSizes: Array.from(setAdd),
      };

    case FilterActionType.REMOVE_FILTERED_SIZE:
      const setRemove = new Set(state.filteredSizes);
      setRemove.delete(action.size);
      return {
        filteredSizes: Array.from(setRemove),
      };
    default:
      return state;
  }
};

