import React from "react";
import styled from "styled-components";
import FacebookIcon from "../asset/svg/icon_facebook_2.svg";
import InstagramIcon from "../asset/svg/icon_instagram_2.svg";
import YoutubeIcon from "../asset/svg/icon_youtube_2.svg";
function shareFix() {
  return (
    <ShareFixDiv>
      <ShareIconDiv>
        <a href="https://www.facebook.com/Ananas.vietnam/">
          <img alt="fb" src={FacebookIcon}></img>
        </a>
      </ShareIconDiv>
      <ShareIconDiv style={{ marginTop: 10, marginBottom: 10 }}>
        <a href="https://www.instagram.com/accounts/login/?next=/ananasvn/">
          <img alt="insta" src={InstagramIcon}></img>
        </a>
      </ShareIconDiv>
      <ShareIconDiv>
        <a href="https://www.youtube.com/discoveryou">
          <img alt="youtube" src={YoutubeIcon}></img>
        </a>
      </ShareIconDiv>
    </ShareFixDiv>
  );
}
export default shareFix;

const ShareFixDiv = styled.div`
  position: fixed;
  right: 0px;
  top: 330px;
  width: 40px;
  background-color: #666;

  padding: 8px;
  z-index: 9999;
  text-align: center;
`;

const ShareIconDiv = styled.div`
  cursor: pointer;
`;
