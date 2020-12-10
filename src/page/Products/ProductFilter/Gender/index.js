import React, { useState } from "react";
import styled from "styled-components";
function GenderFilter(props) {
  const mockData = [
    {
      name: "TẤT CẢ",
      slug: "all",
      isSelect: false,
    },
    {
      name: "NAM",
      slug: "men",
      isSelect: false,
    },
    {
      name: "NỮ",
      slug: "women",
      isSelect: false,
    },
  ];
  const [genderFilers, setGenderFilter] = useState(mockData);

  const handleOnClickGenderFilter = (slug) => {
    const newGenderFilers = genderFilers.map((item, index) => {
      if (item.slug === slug) {
        item.isSelect = true;
      } else {
         item.isSelect = false;
      }
      return item
    });
    setGenderFilter(newGenderFilers);
  };

  return (
    <UlGenderFilter>
      {genderFilers.map((item, index) => (
        <LiGenderFilter
          key={index}
          active={item.isSelect}
          onClick={() => handleOnClickGenderFilter(item.slug)}
        >
          <span>{item.name}</span>
        </LiGenderFilter>
      ))}
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
