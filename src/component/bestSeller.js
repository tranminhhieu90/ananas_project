import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import Slider from "react-slick";
import { BEST_SELLER } from "../config/constants";
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
  console.log("BEST_SELLER", BEST_SELLER);
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
          {BEST_SELLER.map((item) => {
            return (
              <SlideDiv>
                <img
                  style={{ width: "100%" }}
                  src={item.img_url}
                  alt="best-seller"
                ></img>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.color}</p>
                  <div>
                    <span>{`${item.sell_off_price} VND`}</span>
                    <span
                      style={{ textDecoration: "line-through" }}
                    >{`${item.price} VND`}</span>
                  </div>
                </div>
              </SlideDiv>
            );
          })}
        </Slider>
      </div>
      <div>
        <BigBannerImg style={{width: '100%'}} src={BigBanner} alt="bigBanner"></BigBannerImg>
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

const BigBannerImg = styled.img`
  width: 100%;
  margin-top: 7%;
`;
