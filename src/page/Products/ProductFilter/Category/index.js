import React, { useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
function CategoryFilter(props) {
  const [categoryFilter, setCategoryFilter] = useState([]);
  return (
    <CategoryFilterDiv>
      <Row>
        <Col span={24}>
          <CategoryDiv>
            <span>Giày</span>
            <CloseOutlined />
          </CategoryDiv>
        </Col>
        <Col span={24}>
          <CategoryDiv>
            <span>Nửa trên</span>
            <CloseOutlined />
          </CategoryDiv>
        </Col>
        <Col span={24}>
          <CategoryDiv>
            <span>Phụ kiện</span>
            <CloseOutlined />
          </CategoryDiv>
        </Col>
      </Row>
    </CategoryFilterDiv>
  );
}

export default CategoryFilter;

const CategoryFilterDiv = styled.div`
  margin: 10px;
  font-size: 1.2em;
  border-bottom: 2px solid;
`;

const CategoryDiv = styled.div`
  margin: 5px 0px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: lightgray;
    cursor: pointer;
  }
  span:nth-last-child(1) {
    font-size: 12px;
  }
`;
