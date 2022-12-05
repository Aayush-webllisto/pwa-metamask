import * as React from "react";
import styled from "styled-components";
import banner from "../assets/metamask.png";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SBanner = styled.div`
  min-width: 180px;
  width: 100%;
  min-height: 180px;
  height: 100%;
  background: url(${banner}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
  </SBannerWrapper>
);

export default Banner;
