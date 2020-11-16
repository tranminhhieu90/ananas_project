import React from "react";
import { Col, Input, Row } from "antd";
import styled from "styled-components";
function Order() {
  return (
    <>
      <OrderDiv>
        <Row justify="center">
          <Col span={16}>
            <h3>TRA CỨU ĐƠN HÀNG</h3>
            <Input style={{ marginBottom: 40, height: 35 }} placeholder="Mã đơn hàng" />
            <Input
              style={{ marginBottom: 40, height: 35 }}
              placeholder="Email / Số điện thoại"
            />
            <SearchOrder>TRA CỨU ĐƠN HÀNG</SearchOrder>
          </Col>
        </Row>
      </OrderDiv>
    </>
  );
}

export default Order;

const OrderDiv = styled.div`
  margin-top: 3%;

  h3 {
    color: #000;
    font-size: 30px;
    margin: 10px 0px 40px 0px;
    font-weight: 700;
    text-align: center;
  }
`;

const SearchOrder = styled.div`
  background-color: #f15e2c;
  height: 40px;
  width: 240px;
  border: none;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  display: flex;

  justify-content: center;
  align-items: center;
`;
