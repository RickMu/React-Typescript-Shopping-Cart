import React from "react";
import { Action } from "redux";
import { SortBy } from "../../common/services/SortService";

export enum SortActionTypes {
  UPDATE_SORT_BY = "[SORT BY] update",
}

export class UpdateSortAction implements Action {
  public type: SortActionTypes = SortActionTypes.UPDATE_SORT_BY;
  constructor(public sortBy: SortBy) {}
}

export type SortActions = UpdateSortAction;
