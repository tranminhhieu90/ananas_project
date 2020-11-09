import React from "react";
import { Row, Col, Carousel } from "antd";
import styled from "styled-components";
import SaleOff from "../asset/image/Banner_Sale-off-1.jpg";
import Banner1 from "../asset/image/banner1.jpg";
import Banner2 from "../asset/image/banner2.jpg";
import Banner3 from "../asset/image/banner3.jpg";
function AdCollection() {
  return (
    <Row gutter={32} style={{marginLeft: 15, marginRight: 15}}>
      <Col span={12}>
        <Carousel className='banner-carousel'>
          <div>
            <BannerImg src={Banner1}></BannerImg>
          </div>
          <div>
            <BannerImg src={Banner2}></BannerImg>
          </div>
          <div>
            <BannerImg src={Banner3}></BannerImg>
          </div>
        </Carousel>
      </Col>
      <Col span={12}>
        <BannerImg src={SaleOff}></BannerImg>
      </Col>
    </Row>
  );
}

export default AdCollection;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
