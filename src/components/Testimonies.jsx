import React from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
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

export default function Testimonies() {
  return (
    <>
      <GlobalStyle />
      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-3xl mx-auto text-center">
        <div>
          <span className="text-[#fff]">Discover{" "}</span>
          <span className="text-[#fff]">the{" "}</span>
          <span className="text-[#60a6e7]">transformative{" "}</span>
          <span className="text-[#60a6e7]">stories{" "}</span>
          <span className="text-[#fff]">of{" "}</span>
          <span className="text-[#fff]">startups{" "}</span>
          <span className="text-[#fff]">that{" "}</span>
          <span className="text-[#fff]">scaled{" "}</span>
          <span className="text-[#fff]">new{" "}</span>
          <span className="text-[#fff]">heights{" "}</span>
          <span className="text-[#fff]">with{" "}</span>
          <span className="text-[#fff]">us{" "}</span>
        </div>
      </p>
      <div className="w-full hide-scrollbar max-w-[80vw] mx-auto">
        <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
          <div className="w-full p-[1.1rem] cursor-pointer transition-all duration-300 rounded-s-full">
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                className="w-full"
                height={27}
                width={21}
                alt="Starks Associate"
                src="https://forcythe.com/images/starks.svg"
              />
              Starks
            </div>
          </div>
          <div className="w-full p-[1.1rem] cursor-pointer transition-all duration-300">
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                className="w-full"
                height={27}
                width={112}
                alt="ExecutivePros"
                src="https://forcythe.com/images/ExecutivePros Logo.svg"
              />
            </div>
          </div>
          <div className="w-full p-[1.1rem] cursor-pointer bg-accent3 transition-all duration-300">
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                className="w-full"
                height={27}
                width={88}
                alt="Stac AI"
                src="https://forcythe.com/images/stacai.svg"
              />
            </div>
          </div>
          <div className="w-full p-[1.1rem] cursor-pointer transition-all duration-300">
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                className="w-20"
                height={22}
                width={80}
                alt="Iwaria"
                src="https://forcythe.com/images/iwaria.svg"
              />
            </div>
          </div>
          <div className="w-full p-[1.1rem] cursor-pointer transition-all duration-300 rounded-e-full">
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                className="w-36"
                height={25}
                width={144}
                alt="Beaupreneur"
                src="https://forcythe.com/images/Beaupreneur.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative" style={{ left: "20%" }}>
        <div className="sm:basis-[58%] pr-3">
          <div className="H⚡️R-focused">
            <div>
              <p className="text-base font-bold mb-4">
                <div>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>ExecutivePros </span>
                </div>
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-base leading-7 mb-3">
                <div>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>The </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>team </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>understood </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>the </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>assignment </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>and </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>delivered </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>very </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>well. </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>One </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>of </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>the </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>things </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>that </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>stood </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>them </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>out </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>was </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>how </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>they </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>took </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>our </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>concepts </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>and </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>turned </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>it </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>into </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>visually </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>appealing </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>designs </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>that </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>caught </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>the </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>eyes </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>of </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>our </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>clients </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>and </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>made </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>increased </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>web </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>engagements. </span>
                  <span className="text-[#fff]" style={{ opacity: 1 }}>Kudos! </span>
                </div>
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[15px] font-semibold mb-4">
                <div>
                  <span className="text-[#fff]">Testimony, </span>
                  <span className="text-[#fff]">Co-founder </span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0" style={{ border: "0px solid rgb(229, 231, 235)", boxSizing: "border-box", scrollBehavior: "smooth", position: "relative", marginTop: "0.75rem", height: "24rem", width: "100%", objectPosition: "center top" }}>
          <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl" style={{ border: "0px solid rgb(229, 231, 235)", boxSizing: "border-box", scrollBehavior: "smooth", position: "absolute", left: "0px", top: "0px", zIndex: 0, height: "100%", width: "100%", animation: "2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse", borderRadius: "0.75rem", backgroundColor: "rgb(96 166 231/0.1)" }} />
          <img className="rounded-xl relative object-top" alt="ceo" src="https://forcythe.com/images/christina.svg" style={{ border: "0px solid rgb(229, 231, 235)", boxSizing: "border-box", display: "block", verticalAlign: "middle", maxWidth: "100%", scrollBehavior: "smooth", zIndex: 1, borderRadius: "0.75rem", objectPosition: "center top", inset: "0px", position: "absolute", height: "100%", width: "100%", objectFit: "cover", color: "transparent" }} />
        </div>
      </div>
    </>
  );
}
