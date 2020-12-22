import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import InputField from "../../component/FormControls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function OrderForm() {
  const schema = yup.object().shape({
    orderCode: yup.string().required('Please enter order code'),
    orderEmail: yup.string().required('Please enter your email').email('Email is not valid'),
  });
  const form = useForm({
    defaultValues: {
      orderCode: "",
      orderEmail: "",
    },
    resolver: yupResolver(schema)
  });
  const hanldeSubmit = (values) => {
    console.log("order foem", values);
  };
  return (
    <>
      <OrderDiv>
        <Row justify="center">
          <Col span={12}>
            <h3>TRA CỨU ĐƠN HÀNG</h3>
            <form onSubmit={form.handleSubmit(hanldeSubmit)}>
              <InputField
                className="order-form-input"
                placeHolder="Mã đơn hàng"
                form={form}
                name="orderCode"
              />
              <InputField
                className="order-form-input"
                placeHolder="Email"
                form={form}
                name="orderEmail"
              />
              <SearchOrder type="submit">TRA CỨU ĐƠN HÀNG</SearchOrder>
            </form>
          </Col>
        </Row>
      </OrderDiv>
    </>
  );
}

export default OrderForm;

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

const SearchOrder = styled.button`
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
  width: 100%;
`;
