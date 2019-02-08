import React, { PureComponent } from "react";
import Checkbox from "../../../common/components/CheckBox/CheckBox";
import { FilterProp } from "./FilterContainer";
import "./style.scss";

const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

class Filter extends PureComponent<FilterProp> {

  public render() {
    return (
      <div className="filter">
        <h4 className="title">Sizes:</h4>
        {availableSizes.map((value) => <Checkbox label={value}
          handleCheckboxChange={this.updateFilteredSize}/> )}
      </div>
    );
  }

  private updateFilteredSize = (size: string) => {
    if (this.props.filteredSizes.has(size)) {
      this.props.removeFilteredSize(size);
    } else {
      this.props.addFilteredSize(size);
    }
  }
}

export default Filter;
