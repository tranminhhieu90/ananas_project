import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import InputField from "../../component/FormControls/InputField";
import PasswordField from "../../component/FormControls/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function LoginForm() {
  const schema = yup.object().shape({
    userEmail: yup
      .string()
      .required("Please enter your email")
      .email("Email is not valid"),
    password: yup
      .string()
      .required("Please enter your passwors")
      .min(6, "Please enter at least 6 character"),
    confirmPassword: yup
    .string()
    .required("Please enter your passwors")
    .min(6, "Please enter at least 6 character")
    .oneOf([yup.ref('password')], 'Password does not math'),
  });
  const form = useForm({
    defaultValues: {
      userEmail: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const hanldeSubmit = (values) => {
    console.log("login form", values);
  };
  return (
    <>
      <OrderDiv>
        <Row justify="center">
          <Col span={16}>
            <h3>THAM GIA CÙNG DỨA</h3>
            <form onSubmit={form.handleSubmit(hanldeSubmit)}>
              <InputField
                className="order-form-input"
                placeHolder="Email"
                form={form}
                name="userEmail"
              />
              <PasswordField
                className="order-form-input"
                placeHolder="Password"
                form={form}
                name="password"
              />
              <PasswordField
                className="order-form-input"
                placeHolder="Confirm Password"
                form={form}
                name="confirmPassword"
              />
              <SearchOrder type="submit">LOGIN</SearchOrder>
            </form>
          </Col>
        </Row>
      </OrderDiv>
    </>
  );
}

export default LoginForm;

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
