import React, { useState } from "react";
import styled from "styled-components";
function GenderFilter(props) {
  const [genderFiler, setGenderFilter] = useState("");

  return (
    <UlGenderFilter>
      <LiGenderFilter
        active={genderFiler === "all" ? true : false}
        onClick={() => setGenderFilter('all')}
      >
        <span>TẤT CẢ</span>
      </LiGenderFilter>
      <LiGenderFilter
        active={genderFiler === "men" ? true : false}
        onClick={() => setGenderFilter('men')}
      >
        <span>NAM</span>
      </LiGenderFilter>
      <LiGenderFilter
        active={genderFiler === "women" ? true : false}
        onClick={() => setGenderFilter('women')}
      >
        <span>NỮ</span>
      </LiGenderFilter>
    </UlGenderFilter>
  );
}

export default GenderFilter;
const UlGenderFilter = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0px 0px 20px 0px;
  border-bottom: 2px solid black;
  margin: 0px 10px 0px 10px;
`;
const LiGenderFilter = styled.li`
  font-size: 1.5em;
  font-weight: 800;
  border-right: 2px solid gray;
  padding: 0px 15px 0px 15px;
  margin-top: 30px;

  color: ${(props) => (props.active ? "black" : "gray")};
  a {
    color: black;
  }
  a:hover {
    cursor: pointer;
  }
  :nth-last-child(1) {
    margin-right: 0px;
    border-right: none;
    padding: 0px 0px 0px 15px;
  }
  :hover {
    cursor: pointer;
    color: black;
  }
`;
