import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../asset/svg/login_icon.svg";
import ShoppingCart from "../asset/svg/icon_shopping_cart.svg";
import Heart from "../asset/svg/icon_heart.svg";
import Store from "../asset/svg/store_icon.svg";
import Bill from "../asset/svg/icon_bill.svg";
function subMenu() {
  
  return (
    <SubMenu>
      <UlMenu>
        <li>
          <Link to="/search-order"><Img src={Bill}></Img>Tra cứu đơn hàng</Link>
        </li>
        <li>
          <Img src={Store}></Img>Tìm cửa hàng
        </li>
        <li>
          <Img src={Heart}></Img>Yêu thích
        </li>
        <li>
          <Img src={Login}></Img>Đăng nhập
        </li>
        <li>
          <Img src={ShoppingCart}></Img>Giỏ hàng
        </li>
      </UlMenu>
    </SubMenu>
  );
}

export default subMenu;

const UlMenu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  min-height: 30px;

  margin: 0px;
  align-items: center;
  margin-right: 50px;
  
  li {
    margin-right: 10px;
    font-size: 12px;
    font-weight: 600;
    display: flex;

    align-items: center;
  }
  li:nth-last-child(1) {
    margin-right: 5px;
  }
  li:hover {
    color: #ff5f18;
    cursor: pointer;
  }
  a {
    color: #cccccc;
  }
  a:hover {
    color: #ff5f18;
    cursor: pointer;
  }
`;

const SubMenu = styled.div`
  background: black;
  color: white;
`;

const Img = styled.img`
  margin-right: 8px;
`