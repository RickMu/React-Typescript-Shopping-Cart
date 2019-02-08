import React, { PureComponent } from "react";
import Selectbox from "../../../common/components/SelectBox/SelectBox";
import { SortBy, SortType } from "../../../common/services/SortService";
import { SortProps } from "./SortContainer";
import "./style.scss";

class Sort extends PureComponent<SortProps> {

  private sortByOptions =  {
    "highest to lowest": new SortBy(SortType.HIGHEST_PRICE_FIRST),
    "lowest to highest": new SortBy(SortType.LOWEST_PRICE_FIRST),
    "select" : new SortBy(SortType.DEFAULT),
  };
  public render() {
    return (
      <div className="sort">
        <Selectbox options={Object.keys(this.sortByOptions)} handleOnChange={this.handleSortOptionsChange}></Selectbox>
      </div>
    );
  }

  private handleSortOptionsChange = (value: string) => {
    const sortBy = this.sortByOptions[value];
    this.props.updateSort(sortBy);
  }
}

export default Sort;
