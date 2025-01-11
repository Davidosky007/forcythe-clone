import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const SectionPadding = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-family: 'Lexend Regular';
  margin-top: 8rem;

  @media (min-width: 768px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

const HeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border-radius: 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }

  @media (min-width: 1280px) {
    padding: 2.5rem;
  }
`;

const MaxWidthContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  max-width: 56rem;
`;

const MinHeightContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  min-height: 180px;
`;

const HeaderTitle = styled.h1`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 1.75rem;
  font-weight: 400;
  width: 100%;
  text-align: left;
  line-height: 1;
  font-size: 5rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const DescriptionContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-bottom: 2rem;
  max-width: 48rem;
`;

const DescriptionText = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  color: rgb(174, 169, 177);
  font-size: 1.125rem;
  line-height: 1.75rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-bottom: 1.25rem;
`;

const ButtonGroup = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
  width: fit-content;
`;

const ActionButton = styled.button`
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
  z-index: 5;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 9999px;
  background-color: rgb(255, 255, 255);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: rgb(0, 0, 0);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #064386;
    color: white;
  }

  &:hover .default-icon {
    display: none;
  }

  &:hover .hover-icon {
    display: block;
  }
`;

const ButtonBorder = styled.div`
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

  ${ButtonGroup}:hover & {
    border-color: #064386;
  }
`;

const PlayIcon = styled.img`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  scroll-behavior: smooth;
  z-index: 1;
  color: transparent;
`;

const PlayIconHover = styled.img`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  scroll-behavior: smooth;
  z-index: 1;
  display: none;
  color: transparent;

  ${ActionButton}:hover & {
    display: block;
  }
`;

export default function Header() {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const typedRef = useRef(null);
  const descriptionTypedRef = useRef(null);

  useEffect(() => {
    const headerOptions = {
      strings: ["We build <span style='color: rgb(96, 166, 231);'>products</span> that shape a better future"],
      typeSpeed: 50,
      startDelay: 5000,
      showCursor: false,
      onComplete: () => {
        const descriptionOptions = {
          strings: [
            "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation."
          ],
          typeSpeed: 50,
          showCursor: false,
          onComplete: () => {
            setDescriptionVisible(true);
          },
        };
        descriptionTypedRef.current = new Typed(".description-typed-element", descriptionOptions);
      },
    };

    typedRef.current = new Typed(".typed-element", headerOptions);

    return () => {
      typedRef.current.destroy();
      if (descriptionTypedRef.current) {
        descriptionTypedRef.current.destroy();
      }
    };
  }, []);

  return (
    <SectionPadding>
      <HeaderContainer>
        <MaxWidthContainer>
          <MinHeightContainer>
            <HeaderTitle className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 text-white">
              <span className="typed-element"></span>
            </HeaderTitle>
          </MinHeightContainer>
          <DescriptionContainer>
            <DescriptionText visible={descriptionVisible} className="text-darkGrey text-base md:text-lg mb-8 leading-7">
              <span className="description-typed-element"></span>
            </DescriptionText>
          </DescriptionContainer>
          <ButtonContainer>
            <ButtonGroup>
              <ActionButton>
                Book a Call
                <PlayIcon className="default-icon" height={13} width={10} alt="play" src="https://forcythe.com/images/play.svg" />
                <PlayIconHover className="hover-icon" height={10} width={10} alt="play" src="https://forcythe.com/images/play-white.svg" />
              </ActionButton>
              <ButtonBorder />
            </ButtonGroup>
          </ButtonContainer>
        </MaxWidthContainer>
      </HeaderContainer>
    </SectionPadding>
  );
}
