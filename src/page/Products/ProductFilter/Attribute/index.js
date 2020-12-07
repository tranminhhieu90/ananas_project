import React, { useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
function AttibuteFilter(props) {
  const { title, list } = props;
  const [toggleTitle, setToggleTitle] = useState(false);
  return (
    <AttibuteFilterDiv>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <AttibuteTitle
          onClick={() => {
            setToggleTitle(!toggleTitle);
          }}
          color={toggleTitle}
        >
          {title}
        </AttibuteTitle>
        {toggleTitle ? (
          <span>
            <DownOutlined />
          </span>
        ) : (
          <span style={{ color: "#f15e2c" }}>
            <UpOutlined />
          </span>
        )}
      </Row>
      {!toggleTitle && (
        <div>
          {list.map((item, index) => {
            return <AttibuteList key={index}>{item}</AttibuteList>;
          })}
        </div>
      )}
    </AttibuteFilterDiv>
  );
}

export default AttibuteFilter;

const AttibuteTitle = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  margin-right: 10px;
  color: ${(props) => (props.color ? "black" : "#f15e2c")};
`;

const AttibuteFilterDiv = styled.div`
  padding: 20px 0px 20px 0px;
  border-bottom: 1px dashed darkgray;
  margin: 0px 10px 0px 10px;
  cursor: pointer;

  span:nth-last-child(1) {
    font-size: 1em;
    font-weight: bolder;
  }
`;

const AttibuteList = styled.p`
  padding: 6px 0px 6px 20px;
  font-size: 16px;
  margin-bottom: 0px;
  :hover {
    background: lightgray;
  }
`;
