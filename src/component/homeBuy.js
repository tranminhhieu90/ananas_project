import React from "react";
import { Row, Col, Carousel } from "antd";
import styled from "styled-components";
import Category1 from "../asset/image/catalogy-1.jpg";
import Category2 from "../asset/image/catalogy-2.jpg";
import Category3 from "../asset/image/catalogy-3.jpg";

function HomeBuy() {
  return (
    <div style={{ marginTop: 25 }}>
      <Row
        style={{ justifyContent: "center", marginLeft: 15, marginRight: 15 }}
      >
        <HomeBuyH3>DANH MỤC MUA HÀNG</HomeBuyH3>
      </Row>
      <Row gutter={16} style={{ marginLeft: 15, marginRight: 15 }}>
        <Col span={8}>
          <HomeBuyCategory
            style={{ backgroundImage: "url(" + Category1 + ")" }}
          >
            <div>
              <h3>GIÀY NAM</h3>
              <p>New Arrivals</p>
              <p>Best Seller</p>
              <p>Sale-off</p>
            </div>
          </HomeBuyCategory>
        </Col>
        <Col span={8}>
          <HomeBuyCategory
            style={{ backgroundImage: "url(" + Category2 + ")" }}
          >
            <div>
              <h3>GIÀY NỮ</h3>
              <p>New Arrivals</p>
              <p>Best Seller</p>
              <p>Sale-off</p>
            </div>
          </HomeBuyCategory>
        </Col>
        <Col span={8}>
          <HomeBuyCategory
            style={{ backgroundImage: "url(" + Category3 + ")" }}
          >
            <div>
              <h3>DÒNG SẢN PHẨM</h3>
              <p>Basas</p>
              <p>Vintas</p>
              <p>Urbas</p>
              <p>Pattas</p>
            </div>
          </HomeBuyCategory>
        </Col>
      </Row>
    </div>
  );
}
export default HomeBuy;

const HomeBuyH3 = styled.h3`
  font-size: 30px;
  color: #000;
  text-align: center;
  margin-bottom: 40px;

  font-weight: 700;
`;

const HomeBuyCategory = styled.div`
  width: 100%;
  height: 270px;
  text-align: center;
  display: flex;
  
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 23px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;
    :hover {
      color: #ff5f18;
      cursor: pointer;
    }
  }
  p {
    font-size: 16px;
    color: #fff;
    margin-bottom: 5px;
    font-weight: 600;
    :hover {
      color: #ff5f18;
      cursor: pointer;
    }
  }
`;
