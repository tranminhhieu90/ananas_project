import React from "react";
import styled from "styled-components";
import ShoppingCart from "../asset/svg/icon_shopping_cart.svg";
function cartFix() {
  return (
    <CartFixDiv>
      <span>1</span>
      <br/>
      <img src={ShoppingCart} alt='shoping-cart'></img>
    </CartFixDiv>
  );
}
export default cartFix;

const CartFixDiv = styled.div`
  background: #f15e2c;
  color: white;
  width: 40px;
  height: 75px;

  justify-content: center;
  text-align: center;
  padding: 10px 2px;
  font-size: 16px;

  position: fixed;
  right: 0px;
  top: 232px;
  z-index: 9999;
  cursor: pointer;
`;
