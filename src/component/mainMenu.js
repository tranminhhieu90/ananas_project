import React from "react";
import styled from "styled-components";
import AnanasLogo from "../asset/Logo_Ananas.png";
import DiscoverYou from "../asset/svg/DiscoverYOU.svg";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function mainMenu() {
  return (
    <Menu>
      <div style={{width: '10%'}}>
        <LogoImg src={AnanasLogo}></LogoImg>
      </div>
      <div style={{width: '70%'}}>
        <UlMenu>
          <li><span>SẢN PHẨM</span></li>
          <li><span>NAM</span></li>
          <li><span>NỮ</span></li>
          <li><span>SALE OFF</span></li>
          <li>
            <img src={DiscoverYou} alt='discover'></img>
          </li>
        </UlMenu>
      </div>
      <div style={{width: '20%'}}>
        <Input
          size="large"
          placeholder="Tìm Kiếm"
          prefix={<SearchOutlined />}
        />
      </div>
    </Menu>
  );
}

export default mainMenu;

const LogoImg = styled.img`
  width: 130px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
const UlMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;

  li {
    margin-right: 35px;
    font-size: 1.5em;
    font-weight: 800;
    border-right: 2px solid gray;

    padding: 12px 25px 0px 0px; 
  }
  li:nth-last-child(1) {
    margin-right: 0px;
    border-right: none;
    padding: 0;
  }
  li:hover {
    color: #ff5f18;
    cursor: pointer;
  }
`;