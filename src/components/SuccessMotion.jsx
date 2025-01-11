import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const GlobalStyle = styled.div`
  html {
    line-height: 1.5;
    text-size-adjust: 100%;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    transition: 0.3s ease-in-out;
    color: rgb(255, 255, 255);
    background-color: #030516;
    font-optical-sizing: auto;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    font-family: 'Lexend Regular', sans-serif;
    font-style: normal;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;
  height: 100%;
  gap: 5rem;
  background: linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%);
`;

const SkillImageContainer = styled.div`
  position: relative;
  width: auto;
  height: 340px;
`;

const SkillImageBackground = styled.div`
  background-color: rgba(96, 166, 231, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  animation: pulse 2s infinite;
`;

const SkillImage = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: transparent;
`;

const images = [
  "https://forcythe.com/images/Project%20Images/stac.svg",
  "https://forcythe.com/images/Project%20Images/activity.svg",
  "https://forcythe.com/images/Project%20Images/africaFund.svg",
  "https://forcythe.com/images/Project%20Images/starks.svg",
  "https://forcythe.com/images/Project%20Images/exec-pro.svg",
  "https://forcythe.com/images/Project%20Images/phone.svg",
];

export default function SuccessMotion() {
  return (
    <GlobalStyle>
      <div className="min-h-[60px]">
        <div>
          <div>
            <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
              <div>
                <span className="text-[#fff]">Success </span>
                <span className="text-[#fff]">in </span>
                <span className=" text-[#60a6e7] capitalize">Motion </span>
                <span className="text-[#fff]">– </span>
                <span className="text-[#fff] capitalize">Our </span>
                <span className="text-[#fff]">clients’ </span>
                <span className="text-[#fff]">journey </span>
              </div>
            </p>
          </div>
        </div>
      </div>
      <FlexContainer>
        <Marquee speed={20} gradient={false}>
          {images.map((src, index) => (
            <SkillImageContainer key={`marquee-image-${index}`}>
              <SkillImageBackground />
              <SkillImage alt={`project-image-${index}`} src={src} />
            </SkillImageContainer>
          ))}
        </Marquee>
        <Marquee speed={20} gradient={false} direction="right">
          {images.map((src, index) => (
            <SkillImageContainer key={`marquee-image-reverse-${index}`}>
              <SkillImageBackground />
              <SkillImage alt={`project-image-${index}`} src={src} />
            </SkillImageContainer>
          ))}
        </Marquee>
      </FlexContainer>
    </GlobalStyle>
  );
}
