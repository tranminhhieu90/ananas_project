import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
function CategoryFilter(props) {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [shoesFilter, setShoesFilter] = useState(false);
  const [topFilter, setTopFilter] = useState(false);
  const [accessoriesFilter, setAccessoriesFilter] = useState(false);

  const handleSelectCategory = (categoryFilter) => {
    if (categoryFilters.includes(categoryFilter)) {
      return;
    } else {
      const newCategoryFiltersArr = [...categoryFilters];
      newCategoryFiltersArr.push(categoryFilter);
      setCategoryFilters(newCategoryFiltersArr);
    }
  };

  useEffect(() => {
    if (!shoesFilter) {
      const newCategoryFiltersArr = [...categoryFilters];
      var index = categoryFilters.indexOf("shoes");
      if (index > -1) {
        newCategoryFiltersArr.splice(index, 1);
      }
      setCategoryFilters(newCategoryFiltersArr);
    }
  }, [shoesFilter]);

  useEffect(() => {
    if (!topFilter) {
      const newCategoryFiltersArr = [...categoryFilters];
      var index = categoryFilters.indexOf("top");
      if (index > -1) {
        newCategoryFiltersArr.splice(index, 1);
      }
      setCategoryFilters(newCategoryFiltersArr);
    }
  }, [topFilter]);

  useEffect(() => {
    if (!accessoriesFilter) {
      const newCategoryFiltersArr = [...categoryFilters];
      var index = categoryFilters.indexOf("accessories");
      if (index > -1) {
        newCategoryFiltersArr.splice(index, 1);
      }
      setCategoryFilters(newCategoryFiltersArr);
    }
  }, [accessoriesFilter]);

  useEffect(() => {
    console.log("categoryFilters7777", categoryFilters);
    // pass Props to component parent
  }, [categoryFilters]);
  return (
    <CategoryFilterDiv>
      <Row style={{ marginBottom: 10 }}>
        <Col span={24}>
          <CategoryDiv
            isSelect={shoesFilter}
            onClick={() => {
              setShoesFilter(!shoesFilter);
              handleSelectCategory("shoes");
            }}
          >
            <span>Giày</span>
            {shoesFilter && <CloseOutlined />}
          </CategoryDiv>
        </Col>
        <Col span={24}>
          <CategoryDiv
            isSelect={topFilter}
            onClick={() => {
              setTopFilter(!topFilter);
              handleSelectCategory("top");
            }}
          >
            <span>Nửa trên</span>
            {topFilter && <CloseOutlined />}
          </CategoryDiv>
        </Col>
        <Col span={24}>
          <CategoryDiv
            isSelect={accessoriesFilter}
            onClick={() => {
              setAccessoriesFilter(!accessoriesFilter);
              handleSelectCategory("accessories");
            }}
          >
            <span>Phụ kiện</span>
            {accessoriesFilter && <CloseOutlined />}
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
  margin: 2px 0px;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.isSelect ? "lightgray" : "")};

  :hover {
    background: lightgray;
    cursor: pointer;
  }
  span {
    font-size: 1em;
  }
`;
