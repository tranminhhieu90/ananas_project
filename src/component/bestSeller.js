import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import Slider from "react-slick";
import { CONTAINS } from "../config/constants";
import BigBanner from "../asset/image/Banner_Clothing.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function BestSeller() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}>
        <Row style={{ justifyContent: "center" }}>
          <HomeBuyH3>BEST SELLER</HomeBuyH3>
        </Row>
        <Slider {...settings}>
          {CONTAINS.BEST_SELLER.map((item, index) => {
            return (
              <SlideDiv key={index}>
                <img
                  style={{ width: "100%" }}
                  src={item.img_url}
                  alt="best-seller"
                ></img>
                <BestSellerInfo>
                  <h3>{item.name}</h3>
                  <p style={{ fontWeight: 700 }}>{item.color}</p>
                  <BestSellerPrice>
                    <div>
                      <BestSellerPriceSpan>{`${item.sell_off_price} VND`}</BestSellerPriceSpan>
                    </div>
                    <div>
                      <BestSellerPriceSpan
                        style={{ textDecoration: "line-through" }}
                      >{`${item.price} VND`}</BestSellerPriceSpan>
                    </div>
                  </BestSellerPrice>
                </BestSellerInfo>
              </SlideDiv>
            );
          })}
        </Slider>
      </div>
      <div>
        <BigBannerImg
          style={{ width: "100%" }}
          src={BigBanner}
          alt="bigBanner"
        ></BigBannerImg>
      </div>
    </>
  );
}
export default BestSeller;

const HomeBuyH3 = styled.h3`
  font-size: 30px;
  color: #000;
  text-align: center;
  margin-bottom: 40px;

  font-weight: 700;
`;

const SlideDiv = styled.div`
  padding: 0px 10px;
`;

const BestSellerInfo = styled.div`
  text-align: center;
`;

const BestSellerPrice = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BestSellerPriceSpan = styled.span`
  font-weight: 600;
`;
const BigBannerImg = styled.img`
  width: 100%;
  margin-top: 7%;
`;
