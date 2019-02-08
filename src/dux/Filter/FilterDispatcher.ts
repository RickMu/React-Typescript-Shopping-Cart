import { AddFilterAction, FilterAction, FilterActionType, RemoveFilterAction } from "./FilterAction";
import { getFilteredSizes } from "./FilterSelector";


export function addFilteredSize(size: string): FilterAction {

  const action = new AddFilterAction(size);
  return action;
}

export function removeFilteredSize(size: string): FilterAction {
  return new RemoveFilterAction(size);
}
