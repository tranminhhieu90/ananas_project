import React from "react";
import { Row, Col, Carousel } from "antd";
import styled from "styled-components";
import SaleOff from "../asset/image/Banner_Sale-off-1.jpg";
import Banner1 from "../asset/image/banner1.jpg";
import Banner2 from "../asset/image/banner2.jpg";
import Banner3 from "../asset/image/banner3.jpg";
import Banner from "../asset/image/lucky_luke.jpg";
import "../style/addCollection.css";
function AdCollection() {
  return (
    <>
      <div>
        <BannerImg src={Banner}></BannerImg>
      </div>
      <div style={{ marginTop: 80, marginLeft: "5%", marginRight: "5%" }}>
        <Row gutter={16}>
          <Col span={12} className="banner-carousel">
            <Carousel dotPosition={"top"}>
              <div>
                <BannerImg src={Banner3}></BannerImg>
                <div style={{ marginTop: 15 }}>
                  <BannerTitle>ALL BLACK IN BLACK</BannerTitle>
                  <BannerDescription>
                    Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng
                    toát lên một vẻ huyền bí không nhàm chán.
                  </BannerDescription>
                </div>
              </div>
              <div>
                <BannerImg src={Banner2}></BannerImg>
                <div style={{ marginTop: 15 }}>
                  <BannerTitle>ANANAS CREAS FLIP-FLAP</BannerTitle>
                  <BannerDescription>
                    Khi sự tích cực, trung thực và ngẫu hứng trở thành tiêu chí
                    sống; niềm vui sẽ xuất hiện ở mọi nơi.
                  </BannerDescription>
                </div>
              </div>
              <div>
                <BannerImg src={Banner1}></BannerImg>
                <div style={{ marginTop: 15 }}>
                  <BannerTitle>BÌNH MỚI RƯỢU "MỚI"</BannerTitle>
                  <BannerDescription>
                    Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi
                    cái tên, Basas mới trở lại với những cải tiến đáng giá chắc
                    chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng
                    tôi làm ra nó.
                  </BannerDescription>
                </div>
              </div>
            </Carousel>
          </Col>
          <Col span={12}>
            <BannerImg src={SaleOff}></BannerImg>
            <div style={{ marginTop: 15 }}>
              <BannerTitle>OUTLET SALE</BannerTitle>
              <BannerDescription>
                Danh mục những sản phẩm bán tại Outlet Store, đã được phát hành
                trước một thời gian và đang rơi vào tình trạng bể size, hết mã.
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
