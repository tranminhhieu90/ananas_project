import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import StoreImg from "../asset/svg/Store.svg";
import LogoAnanasFooter from "../asset/svg/Logo_Ananas_Footer.svg";
import styled from "styled-components";
import FacebookIcon from "../asset/svg/icon_facebook_footer.svg";
import InstagramIcon from "../asset/svg/icon_instagram_footer.svg";
import YoutubeIcon from "../asset/svg/icon_youtube_footer.svg";
import IconFooter from "../asset/icon_bocongthuong.png";
function Footer() {
  return (
    <FooterDiv>
      <Row>
        <Col span={6} style={{ paddingLeft: 15 }}>
          <Row>
            <img src={StoreImg} alt="store"></img>
          </Row>
          <Row>
            <FindStoreDiv>TÌM CỬA HÀNG</FindStoreDiv>
          </Row>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={6}>
              <FooterListP>SẢN PHẨM</FooterListP>
              <FooterUl>
                <li>Giày Nam</li>
                <li>Giày Nữ</li>
                <li>Thời trang & Phụ kiện</li>
                <li>Sale-off</li>
              </FooterUl>
            </Col>
            <Col span={6}>
              <FooterListP>VỀ CÔNG TY</FooterListP>
              <FooterUl>
                <li>
                  <Link to="/carrier">Dứa tuyển dụng</Link>
                </li>
                <li>Liên hệ nhượng quyền</li>
                <li>Về Ananas</li>
              </FooterUl>
            </Col>
            <Col span={6}>
              <FooterListP>HỖ TRỢ</FooterListP>
              <FooterUl>
                <li>FAQs</li>
                <li>Bảo mật thông tin</li>
                <li>Chính sách chung</li>
                <li>Tra cứu đơn hàng</li>
              </FooterUl>
            </Col>
            <Col span={6}>
              <FooterListP>LIÊN HỆ</FooterListP>
              <FooterUl>
                <li>Email góp ý</li>
                <li>Hotline</li>
                <li>0963 429 749</li>
              </FooterUl>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <FooterListP style={{ marginBottom: 0 }}>
                ANANAS SOCIAL
              </FooterListP>
              <div>
                <IconFooterImg src={FacebookIcon}></IconFooterImg>
                <IconFooterImg src={InstagramIcon}></IconFooterImg>
                <IconFooterImg src={YoutubeIcon}></IconFooterImg>
              </div>
            </Col>
            <Col span={6}>
              <FooterListP>ĐĂNG KÝ NHẬN MAIL</FooterListP>
            </Col>
            <Col span={12} style={{ paddingLeft: 20 }}>
              <img src={LogoAnanasFooter}></img>
            </Col>
          </Row>
          <Row
            style={{ marginTop: "10%", display: "flex", alignItems: "center" }}
          >
            <Col span={6}>
              <img src={IconFooter} alt="icon- footer"></img>
            </Col>
            <Col span={18}>
              <FooterListSpan>
                Copyright © 2020 Ananas. All rights reserved.
              </FooterListSpan>
            </Col>
          </Row>
        </Col>
      </Row>
    </FooterDiv>
  );
}

export default Footer;

const FooterDiv = styled.div`
  margin-top: 7%;
  background-color: #4c4c4c;
  padding: 60px 0px 60px 0px;
  overflow: hidden;
`;

const FindStoreDiv = styled.div`
  background-color: #f15e2c;
  border: #f15e2c 1px solid;
  color: #fff;
  font-size: 23px;

  width: 279px;
  height: 40px;
  margin-top: 20px;
  text-align: center;

  font-weight: 900;
`;

const FooterListP = styled.p`
  color: #fff;
  font-size: 23px;
  padding-bottom: 9px;
  line-height: 1.6em;

  font-weight: 700;
`;

const FooterListSpan = styled.span`
  font-size: 16px;
  letter-spacing: 1px;
  color: #808080;
`;

const IconFooterImg = styled.img`
  padding: 0px 5px;
`;

const FooterUl = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    font-size: 16px;
    color: #cccccc;

    a {
      font-size: 16px;
      color: #cccccc;
    }
    a:hover {
      color: #ff5f18;
      cursor: pointer;
    }
  }

  li:hover {
    color: #ff5f18;
    cursor: pointer;
  }
`;
