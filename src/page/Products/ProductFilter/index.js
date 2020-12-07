import React from "react";
import GenderFilter from "./Gender";
import CategoryFilter from "./Category";
import Attribute from "./Attribute";
import { CONTAINS } from "../../../config/constants";

function ProductFiler(props) {
  const {ATTRIBUTES} = CONTAINS
  return (
    <div>
      <GenderFilter />
      <CategoryFilter />
      {ATTRIBUTES.map((attribute) => {
        return(
          <Attribute title={attribute.title} list={attribute.list_attribute}/>
        )
      })}
    </div>
  );
}

export default ProductFiler;
