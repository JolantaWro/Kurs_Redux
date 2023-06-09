import React from "react";
import Panel from "../Panel";

const LastProducts = ({ lastProducts }) => {
  return (
    <Panel
      title="Ostatnie produkty"
      theme="is-danger"
      path="products"
      iconName="pizza-slice"
      listElements={lastProducts} />
  );
};

export default LastProducts;