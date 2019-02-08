import { Action } from "redux";

export enum FilterActionType {
  ADD_FILTERED_SIZE = "[FILTER] Add",
  REMOVE_FILTERED_SIZE = "[FILTER] Remove",
}

export class AddFilterAction implements Action {
  public type: FilterActionType = FilterActionType.ADD_FILTERED_SIZE;
  constructor(public size: string) {}
}

export class RemoveFilterAction implements Action {
  public type: FilterActionType = FilterActionType.REMOVE_FILTERED_SIZE;
  constructor(public size: string) {}
}

export type FilterAction = AddFilterAction | RemoveFilterAction;
