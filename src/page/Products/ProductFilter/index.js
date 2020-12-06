import React from 'react';
import GenderFilter from './Gender';
import CategoryFilter from './Category'
function ProductFiler(props) {
  return (
    <div>
      <GenderFilter/>
      <CategoryFilter/>
    </div>
  );
}

export default ProductFiler;