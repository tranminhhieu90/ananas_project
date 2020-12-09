import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
function CategoryFilter(props) {
  const [categoryFilters, setCategoryFilters] = useState([
			{
				"name": "Giày",
				"slug": "shoes",
        "isSelect": false
			},
			{
				"name": "Nửa trên",
				"slug": "top",
        "isSelect": false
			},
			{
				"name": "Phụ kiện",
				"slug": "accessories",
        "isSelect": false
			}
		]);

  const handleSelectCategory = (slug) => {
    let existCategory = categoryFilters.find((obj) => obj.slug === slug);
    if(existCategory){
      existCategory.isSelect = true;
      setCategoryFilters([...categoryFilters]);
    }
  };
  
  return (
    <CategoryFilterDiv>
      <Row style={{ marginBottom: 10 }}>
        {categoryFilters.map((category) => (
          <Col span={24}>
          <CategoryDiv
            isSelect={category.isSelect}
            onClick={() => handleSelectCategory(category.slug)}
          >
            <span>{category.name}</span>
            {category.isSelect && <CloseOutlined />}
          </CategoryDiv>
        </Col>
        ))}
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
  margin: 2px 0px;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.isSelect ? "lightgray" : "")};
  font-weight: ${(props) => (props.isSelect ? "600" : "")};

  :hover {
    background: lightgray;
    cursor: pointer;
  }
  span {
    font-size: 1em;
  }
`;
