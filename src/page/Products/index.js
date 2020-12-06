import React from "react";
import { Row, Col } from "antd";
import ProductFiler from "../Products/ProductFilter";
import ProductLists from "../Products/ProductList";
import styled from "styled-components";
function Products(props) {
  return (
    <ProductDiv>
      <Row gutter={8}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <ProductFiler />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <ProductLists />
        </Col>
      </Row>
    </ProductDiv>
  );
}

export default Products;

const ProductDiv = styled.div`
  margin: 30px; 
`;