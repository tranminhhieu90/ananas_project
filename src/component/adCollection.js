import React from "react";
import { Row, Col, Carousel } from "antd";
import styled from "styled-components";
import Banner from "../asset/image/lucky_luke.jpg";
import "../style/addCollection.css";
import { CONTAINS } from "../config/constants";
function AdCollection() {
  return (
    <>
      <div>
        <BigBannerImg src={Banner}></BigBannerImg>
      </div>
      <div style={{ marginTop: 80, marginLeft: "5%", marginRight: "5%" }}>
        <Row gutter={16}>
          <Col span={12} className="banner-carousel">
            <Carousel dotPosition={"top"}>
              {CONTAINS.COLLECTIONS.map((item, index) => {
                return (
                  <div key={index}>
                    <BannerImg src={item.img_url}></BannerImg>
                    <div style={{ marginTop: 15 }}>
                      <BannerTitle>{item.title}</BannerTitle>
                      <BannerDescription>{item.description}</BannerDescription>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </Col>
          <Col span={12}>
            <BannerImg src={CONTAINS.COLLECTIONS_EXTRA.img_url}></BannerImg>
            <div style={{ marginTop: 15 }}>
              <BannerTitle>{CONTAINS.COLLECTIONS_EXTRA.title}</BannerTitle>
              <BannerDescription>
                {CONTAINS.COLLECTIONS_EXTRA.description}
              </BannerDescription>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdCollection;

const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 320px;
`;

const BigBannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const BannerTitle = styled.h3`
  font-size: 2vw;
  font-weight: 800;
  display: inline-block;

  :hover {
    color: #ff5f18;
    cursor: pointer;
  }
`;

const BannerDescription = styled.p`
  font-size: 1.2vw;
`;
