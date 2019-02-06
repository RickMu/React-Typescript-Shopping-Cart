import React from "react";
import "./style.scss";

interface Props {
  productsLength: number;
}

const ShelfHeader: React.FunctionComponent<Props> = ({productsLength}) => {
  return(
    <div className="shelf-header">
      <small className="products-found">
        <span>{productsLength} Product(s) found.</span>
      </small>
    </div>
  );
};

export default ShelfHeader;
