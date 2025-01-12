import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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
    font-family: Lexend, sans-serif;
    font-optical-sizing: auto;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;

const Section = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
  padding-left: 7rem;
  padding-right: 7rem;
  background: linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%);
  margin-bottom: 6rem;


  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-bottom: 4rem;
  }
`;

const Container = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: auto;
  max-width: 45rem;
`;

const Heading = styled.h2`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  font-weight: inherit;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 1.5rem;
  font-size: 2.6rem;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const AccentText = styled.span`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  color: rgb(96 166 231/1);
`;

const ButtonContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.25rem;
  width: fit-content;
`;

const ButtonWrapper = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
  width: fit-content;
`;

const Button = styled.button`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  text-transform: none;
  appearance: button;
  background-image: none;
  scroll-behavior: smooth;
  position: relative;
  z-index: 10;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 9999px;
  background-color: rgb(255 255 255/1);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: rgb(0 0 0/1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #064386;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const DashedBorder = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: absolute;
  right: 0.375rem;
  top: 0.375rem;
  z-index: 0;
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  border-width: 1px;
  border-style: dashed;
`;

export default function Cta() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <Container>
          <Heading>
            <AccentText>Ready to Scale?</AccentText>
            <br /> Join successful brands that chose us as their
            <AccentText> growth accelerator</AccentText>
          </Heading>
          <ButtonContainer>
            <ButtonWrapper>
              <Button>Book a Call</Button>
              <DashedBorder />
            </ButtonWrapper>
          </ButtonContainer>
        </Container>
      </Section>
    </>
  );
}
