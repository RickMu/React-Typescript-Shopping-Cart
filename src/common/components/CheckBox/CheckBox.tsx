import React, { Component } from "react";
import "./style.scss";

interface Props {
// tslint:disable-next-line: ban-types
    handleCheckboxChange: (label: string) => void;
    label: string;
}

interface State {
  isChecked: boolean;
}

class Checkbox extends Component<Props, State> {

  public state = {
    isChecked: false,
  };

  public render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />

          <span className="checkmark">{label}</span>
        </label>
      </div>
    );
  }

  private toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  }
}

export default Checkbox;
