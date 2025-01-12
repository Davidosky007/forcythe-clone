import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Section = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  padding-left: 7rem;
  padding-right: 7rem;
  background: linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%);

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const Text = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 2.5rem;
  text-align: center;
  color: rgb(179 208 242/1);
  font-size: 2.6rem;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const Grid = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
    gap: 1.75rem;
  }
`;

const Card = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
  display: flex;
  height: min-content;
  width: fit-content;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  overflow: visible;
  border-radius: 1rem;
  border-width: 0px;
  padding: 1px;
  text-align: left;
  transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;
`;

const CardContent = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  z-index: 10;
  width: auto;
  border-radius: inherit;
  background-color: transparent;
  color: rgb(255 255 255/1);
`;

const CardInner = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  width: 100%;
  border-radius: 1rem;
  background-color: rgb(3 5 22/1);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardIcon = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-bottom: 1.25rem;
  width: fit-content;
  border-radius: 0.375rem;
  background-color: rgb(96 166 231/0.6);
  padding: 0.5rem;
`;

const CardTitle = styled.h4`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
`;

const CardText = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 0px;
  font-size: 17.5px;
  color: rgb(174 169 177/1);
`;

const CardBackground = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  inset: 0px;
  z-index: 0;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: inherit;
  background: radial-gradient(16.7845% 43.4105% at 2.25% 47.75%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  filter: blur(2px);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CardOverlay = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: absolute;
  inset: 2px;
  flex: 0 0 auto;
  border-radius: inherit;
  background-color: rgb(0 0 0/1);
`;

const GlobalStyle = createGlobalStyle`
  html {
    border: 0px solid rgb(229, 231, 235);
    box-sizing: border-box;
    line-height: 1.5;
    text-size-adjust: 100%;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    border: 0px solid rgb(229, 231, 235);
    margin: 0px;
    transition: 0.3s ease-in-out;
    color: rgb(255, 255, 255);
    background-color: #030516;
    font-optical-sizing: auto;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: __Lexend_86777a, __Lexend_Fallback_86777a;
    font-style: normal;
  }
`;

export default function Benefits() {
  return (
    <>
      <GlobalStyle />
      <Section className="section-padding py-14">
        <div>
          <div>
            <Text className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
              <div>
                <span className="text-[#fff]">Your{" "}</span>
                <span className="text-[#fff]">best{" "}</span>
                <span className="text-[#fff]">call{" "}</span>
                <span className="text-[#fff]">for{" "}</span>
                <span className="text-[#fff] capitalize">B2B/B2C{" "}</span>
                <span className="text-[#fff]">product{" "}</span>
                <span className="text-[#fff]">innovation{" "}</span>
              </div>
            </Text>
          </div>
        </div>
        <Grid className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          <Card className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
            <CardContent className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
              <CardInner className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                <CardIcon className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                  <img height={30} width={30} alt="Experience" src="https://forcythe.com/images/layers-three.svg" />
                </CardIcon>
                <CardTitle className="text-2xl font-medium mb-5">Experience</CardTitle>
                <CardText className="mb-0 text-darkGrey text-[17.5px]">
                  <div>
                    <span className="text-[#fff]">Decades{" "}</span>
                    <span className="text-[#fff]">of{" "}</span>
                    <span className="text-[#fff]">collective{" "}</span>
                    <span className="text-[#fff]">wisdom.{" "}</span>
                    <span className="text-[#fff]">Leverage{" "}</span>
                    <span className="text-[#fff]">our{" "}</span>
                    <span className="text-[#fff]">extensive{" "}</span>
                    <span className="text-[#fff]">experience{" "}</span>
                    <span className="text-[#fff]">to{" "}</span>
                    <span className="text-[#fff]">avoid{" "}</span>
                    <span className="text-[#fff]">common{" "}</span>
                    <span className="text-[#fff]">pitfalls{" "}</span>
                    <span className="text-[#fff]">and{" "}</span>
                    <span className="text-[#fff]">accelerate{" "}</span>
                    <span className="text-[#fff]">your{" "}</span>
                    <span className="text-[#fff]">business{" "}</span>
                    <span className="text-[#fff]">growth.{" "}</span>
                  </div>
                </CardText>
              </CardInner>
            </CardContent>
            <CardBackground className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]" />
            <CardOverlay className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
          </Card>
          <Card className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
            <CardContent className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
              <CardInner className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                <CardIcon className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                  <img height={30} width={30} alt="Quick Support" src="https://forcythe.com/images/layers-three.svg" />
                </CardIcon>
                <CardTitle className="text-2xl font-medium mb-5">Quick Support</CardTitle>
                <CardText className="mb-0 text-darkGrey text-[17.5px]">
                  <div>
                    <span className="text-[#fff]">We{" "}</span>
                    <span className="text-[#fff]">are{" "}</span>
                    <span className="text-[#fff]">your{" "}</span>
                    <span className="text-[#fff]">reliable{" "}</span>
                    <span className="text-[#fff]">partner,{" "}</span>
                    <span className="text-[#fff]">always{" "}</span>
                    <span className="text-[#fff]">there{" "}</span>
                    <span className="text-[#fff]">when{" "}</span>
                    <span className="text-[#fff]">you{" "}</span>
                    <span className="text-[#fff]">need{" "}</span>
                    <span className="text-[#fff]">us,{" "}</span>
                    <span className="text-[#fff]">ensuring{" "}</span>
                    <span className="text-[#fff]">smooth{" "}</span>
                    <span className="text-[#fff]">operations{" "}</span>
                    <span className="text-[#fff]">at{" "}</span>
                    <span className="text-[#fff]">every{" "}</span>
                    <span className="text-[#fff]">stage{" "}</span>
                    <span className="text-[#fff]">of{" "}</span>
                    <span className="text-[#fff]">your{" "}</span>
                    <span className="text-[#fff]">growth.{" "}</span>
                  </div>
                </CardText>
              </CardInner>
            </CardContent>
            <CardBackground className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]" />
            <CardOverlay className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
          </Card>
          <Card className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
            <CardContent className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
              <CardInner className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                <CardIcon className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                  <img height={30} width={30} alt="Cost Savings" src="https://forcythe.com/images/layers-three.svg" />
                </CardIcon>
                <CardTitle className="text-2xl font-medium mb-5">Cost Savings</CardTitle>
                <CardText className="mb-0 text-darkGrey text-[17.5px]">
                  <div>
                    <span className="text-[#fff]">Maximising{" "}</span>
                    <span className="text-[#fff]">impact,{" "}</span>
                    <span className="text-[#fff]">minimising{" "}</span>
                    <span className="text-[#fff]">costs{" "}</span>
                    <span className="text-[#fff]">efficiency{" "}</span>
                    <span className="text-[#fff]">is{" "}</span>
                    <span className="text-[#fff]">key.{" "}</span>
                    <span className="text-[#fff]">We{" "}</span>
                    <span className="text-[#fff]">provide{" "}</span>
                    <span className="text-[#fff]">cost-effective{" "}</span>
                    <span className="text-[#fff]">solutions{" "}</span>
                    <span className="text-[#fff]">without{" "}</span>
                    <span className="text-[#fff]">compromising{" "}</span>
                    <span className="text-[#fff]">on{" "}</span>
                    <span className="text-[#fff]">quality.{" "}</span>
                  </div>
                </CardText>
              </CardInner>
            </CardContent>
            <CardBackground className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]" />
            <CardOverlay className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
          </Card>
        </Grid>
      </Section>
    </>
  );
}
