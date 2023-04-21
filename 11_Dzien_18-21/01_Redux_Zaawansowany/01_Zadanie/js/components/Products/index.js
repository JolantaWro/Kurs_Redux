import React from "react";
import Panel from "../Panel";


const AllProducts = ({allProducts}) => {

  return (
    <>
      <h1 className="title">Wszystkie produkty</h1>
      <Panel iconName={"folder"} path={"products"} listElements={allProducts} heading={false} footer={false} />
    </>
  );
};

export default AllProducts;
