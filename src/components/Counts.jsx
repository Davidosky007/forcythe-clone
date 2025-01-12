import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Typed from "react-typed";

const Container = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  margin-top: 10rem;
  max-width: 52rem;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url("https://forcythe.com/images/arc.svg");
  background-size: contain;
`;

const InnerContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: auto;
  max-width: 36rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-align: center;
  padding-bottom: 5rem;
  padding-top: 15rem;
`;

const TitleContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: auto;
  max-width: 28rem;
  margin-bottom: 5rem;
`;

const Title = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: white;
  strong {
    color: rgb(96, 166, 231);
  }
`;

const FlexContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;
`;

const FlexItem = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
`;

const Count = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-weight: 600;
  color: rgb(96 166 231/1);
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Label = styled.span`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
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

const AnimatedCount = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.ceil(start));
    }, 100);

    return () => clearInterval(timer);
  }, [end]);

  return <Count>{count}+</Count>;
};

export default function Counts() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <InnerContainer>
          <TitleContainer>
            <Title>
              <Typed
                strings={[
                  'We build solutions that help <strong>businesses</strong> of all sizes to <strong>scale</strong>.',
                ]}
                typeSpeed={40}
                backSpeed={false}
                loop={false}
              />
            </Title>
          </TitleContainer>
          <FlexContainer>
            <FlexItem>
              <AnimatedCount end={50} />
              <Label>Clients</Label>
            </FlexItem>
            <FlexItem>
              <AnimatedCount end={120} />
              <Label>Projects</Label>
            </FlexItem>
            <FlexItem>
              <AnimatedCount end={10} />
              <Label>Team Leads</Label>
            </FlexItem>
            <FlexItem>
              <AnimatedCount end={10} />
              <Label>Glorious Years</Label>
            </FlexItem>
          </FlexContainer>
        </InnerContainer>
      </Container>
    </>
  );
}