import React, { PureComponent } from "react";
import Checkbox from "../../../common/components/CheckBox/CheckBox";
import "./style.scss";

const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

class Filter extends PureComponent<{}> {

  public render() {
    return (
      <div className="filter">
        <h4 className="title">Sizes:</h4>
        {availableSizes.map((value) => <Checkbox label={value} handleCheckboxChange={(label) => console.log(label)}/> )}
      </div>
    );
  }
}

export default Filter;
