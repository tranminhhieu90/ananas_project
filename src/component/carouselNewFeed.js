import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";

const newFeedArr = [
  {
    key: 1,
    content: "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH",
  },
  {
    key: 2,
    content: "FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !",
  },
  {
    key: 3,
    content: "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN",
  },
];
function NewFeed() {
  return (
    <>
      <Carousel autoplay dots={false}>
        {newFeedArr.map((item) => {
          return (
            <NewFeedDiv key={item.key}>
              <NewFeedP>{item.content}</NewFeedP>
            </NewFeedDiv>
          );
        })}
      </Carousel>
    </>
  );
}

export default NewFeed;

const NewFeedDiv = styled.div`
  background: #f1f1f1;
  height: 50px;
  display: flex;
  align-items: center;

  cursor: pointer;
  padding-top: 12px;
`;

const NewFeedP = styled.p`
  font-style: italic;
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
`;
