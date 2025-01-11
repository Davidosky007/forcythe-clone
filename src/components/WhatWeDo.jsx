import React from "react";
import styled from "styled-components";

const Section = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 7rem;
  padding-right: 7rem;

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const MaxWidthDiv = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  max-width: 45rem;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Text = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  font-size: 2.5rem;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const FlexDiv = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BasisDiv = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: flex;
  flex-basis: 50%;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const PaddingDiv = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-right: 2.5rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const GridDiv = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 0.25rem;
  border-radius: 9999px;
  border-width: 2px;
  border-color: rgb(179 208 242/1);
  padding: 0.875rem;
`;

const Button = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  cursor: pointer;
  overflow: hidden;
  border-radius: 9999px;
  background-color: ${(props) => (props.active ? "rgb(179 208 242/1)" : "transparent")};
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "rgb(0 0 0/1)" : "rgb(255 255 255/1)")};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;

const Image = styled.img`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  display: block;
  vertical-align: middle;
  max-width: 100%;
  scroll-behavior: smooth;
  z-index: 1;
  height: 426px;
  width: 90%;
  color: transparent;

  @media (max-width: 768px) {
    height: 350px;
    width: 100%;
  }
`;

export default function WhatWeDo() {
  return (
    <Section className="section-padding py-20">
      <MaxWidthDiv className="mb-12 xl:mb-0 max-w-[45rem]">
        <div>
          <Text className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
            <div>
              <span className="text-[#fff]" style={{ opacity: 1 }}>From{" "}</span>
              <span className="text-[#60a6e7] capitalize" style={{ textTransform: "capitalize", color: "rgb(96 166 231/1)", opacity: 1 }}>Spark{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>to{" "}</span>
              <span className="text-[#60a6e7] capitalize" style={{ textTransform: "capitalize", color: "rgb(96 166 231/1)", opacity: 1 }}>Spotlight:{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>we{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>take{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>you{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>every{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>step{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>of{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>the{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>way{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>to{" "}</span>
              <span className="text-[#fff]" style={{ opacity: 1 }}>success.{" "}</span>
            </div>
          </Text>
        </div>
      </MaxWidthDiv>
      <FlexDiv className="flex lg:items-end flex-col md:flex-row">
        <BasisDiv className="basis-1/2 flex mb-8 md:mb-0">
          <PaddingDiv className="md:pr-10">
            <GridDiv className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
              <Button active className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-accent2 text-black">Idea</Button>
              <Button className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-transparent text-white">Design</Button>
              <Button className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-transparent text-white">Develop</Button>
              <Button className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-transparent text-white">Launch</Button>
            </GridDiv>
            <div>
              <div>
                <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                  <div>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Your{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>vision{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>is{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>unique.{" "}</span>
                  </div>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                  <div>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Nurture{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Your{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Idea{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>into{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>a{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Blueprint{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>for{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Success{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>with{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>our{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>strategic{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>insights{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>and{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>industry{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>expertise.{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>Your{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>vision{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>is{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>unique,{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>let’s{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>us{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>shape{" "}</span>
                    <span className="text-[#fff]" style={{ opacity: 1 }}>it.{" "}</span>
                  </div>
                </p>
              </div>
            </div>
            <div className="relative w-fit group" style={{ position: "relative", width: "fit-content" }}>
              <button className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md" style={{ position: "relative", zIndex: 10, display: "flex", cursor: "pointer", alignItems: "center", justifyContent: "center", gap: "0.5rem", whiteSpace: "nowrap", borderRadius: "9999px", backgroundColor: "rgb(255 255 255/1)", paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "12px", paddingBottom: "12px", textAlign: "center", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 600, color: "rgb(0 0 0/1)", transitionProperty: "all", transitionDuration: "0.3s", transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                Book a call
                <img className="group-hover:hidden" height={13} width={10} alt="play" src="https://forcythe.com/images/play.svg" style={{ display: "block", verticalAlign: "middle", maxWidth: "100%", height: "auto", zIndex: 1, color: "transparent" }} />
                <img className="hidden group-hover:block" height={10} width={10} alt="play" src="https://forcythe.com/images/play-white.svg" style={{ verticalAlign: "middle", maxWidth: "100%", height: "auto", zIndex: 1, display: "none", color: "transparent" }} />
              </button>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" style={{ position: "absolute", right: "0.375rem", top: "0.375rem", zIndex: 0, height: "100%", width: "100%", borderRadius: "9999px", borderWidth: "1px", borderStyle: "dashed" }} />
            </div>
          </PaddingDiv>
        </BasisDiv>
        <BasisDiv className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0" style={{ position: "relative", display: "flex", flexBasis: "50%", marginTop: "0px", justifyContent: "flex-end" }}>
          <Image className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]" height={426} width={468} alt="plan-img" src="https://forcythe.com/images/camera-man.svg" />
        </BasisDiv>
      </FlexDiv>
    </Section>
  );
}
