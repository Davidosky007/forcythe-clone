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

const Section = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-top: 1rem;
  margin-left: 7rem;
  margin-right: 7rem;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
`;

const FlexContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  text-align: left
`;

const Text = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 0px;
  font-size: 2.6rem;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const Span = styled.span`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  opacity: 1;
`;

const RelativeContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
  width: fit-content;
`;

const Link = styled.a`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  text-decoration: inherit;
  color: inherit;
  scroll-behavior: smooth;
`;

const ActionButton = styled.span`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
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

const BlogsGrid = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
    gap: 2rem;
  }
`;

const BlogLink = styled.a`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  text-decoration: inherit;
  color: inherit;
  scroll-behavior: smooth;
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1.3rem;
  padding-bottom: 1.25rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const BlogImageContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
  margin-bottom: 1.5rem;
  height: 14rem;

  @media (max-width: 768px) {
    height: 15rem;
  }
`;

const BlogImage = styled.img`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  display: block;
  vertical-align: middle;
  max-width: 100%;
  scroll-behavior: smooth;
  z-index: 1;
  transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  border-radius: 1.3rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  inset: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  color: transparent;
`;

const BlogContent = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
  padding-left: 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
`;

const BlogTitle = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

const BlogMeta = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(174 169 177/1);
`;

const BlogMetaSpan = styled.span`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
`;

const BlogMetaDot = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-left: 6px;
  margin-right: 6px;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: rgb(255 255 255/1);
`;

const BlogHeading = styled.h6`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export default function Blogs() {
  return (
    <>
      <GlobalStyle />
      <Section className="section-margin my-10 lg:mb-24">
        <FlexContainer className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center mb-12">
          <TextContainer>
            <Text className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
              <div>
                <Span>Read{" "}</Span>
                <Span>our{" "}</Span>
                <Span>articles,{" "}</Span>
                <Span>news{" "}</Span>
                <Span>and{" "}</Span>
                <Span>product{" "}</Span>
                <Span>blog{" "}</Span>
              </div>
            </Text>
          </TextContainer>
          <RelativeContainer className="relative w-fit group">
            <Link href="/">
              <ActionButton className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">
                Visit Blog
                <img
                  className="group-hover:hidden"
                  height={13}
                  width={10}
                  alt="play"
                  src="https://forcythe.com/images/play.svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "auto",
                    scrollBehavior: "smooth",
                    zIndex: 1,
                    color: "transparent",
                  }}
                />
                <img
                  className="hidden group-hover:block"
                  height={10}
                  width={10}
                  alt="play"
                  src="https://forcythe.com/images/play-white.svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "auto",
                    scrollBehavior: "smooth",
                    zIndex: 1,
                    display: "none",
                    color: "transparent",
                  }}
                />
              </ActionButton>
            </Link>
            <DashedBorder className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
          </RelativeContainer>
        </FlexContainer>
        <BlogsGrid className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <BlogLink
            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
            href="/"
          >
            <BlogImageContainer className="h-60 sm:h-56 relative mb-6">
              <div
                className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollBehavior: "smooth",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  zIndex: 0,
                  height: "100%",
                  width: "100%",
                  animation:
                    "2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse",
                  borderRadius: "1.3rem",
                  backgroundColor: "rgb(96 166 231/0.1)",
                }}
              />
              <BlogImage
                className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                alt="Will AI take over Art?"
                sizes="100vw"
                src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1920&q=75"
              />
            </BlogImageContainer>
            <BlogContent className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
              <BlogTitle className="text-lg font-semibold mb-1">Blog</BlogTitle>
              <BlogMeta className="text-base text-darkGrey flex items-center mb-6">
                <BlogMetaSpan>The Reformist</BlogMetaSpan>
                <BlogMetaDot className="h-2 w-2 rounded-full bg-white mx-[6px]" />
                <BlogMetaSpan>May 29th, 2024</BlogMetaSpan>
              </BlogMeta>
              <BlogHeading className="text-xl md:text-2xl font-semibold line-clamp-2">
                Will AI take over Art?
              </BlogHeading>
            </BlogContent>
          </BlogLink>
          <BlogLink
            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
            href="/"
          >
            <BlogImageContainer className="h-60 sm:h-56 relative mb-6">
              <div
                className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollBehavior: "smooth",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  zIndex: 0,
                  height: "100%",
                  width: "100%",
                  animation:
                    "2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse",
                  borderRadius: "1.3rem",
                  backgroundColor: "rgb(96 166 231/0.1)",
                }}
              />
              <BlogImage
                className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                alt="Cryptocurrency vs Tokens"
                sizes="100vw"
                src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1920&q=75"
              />
            </BlogImageContainer>
            <BlogContent className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
              <BlogTitle className="text-lg font-semibold mb-1">Blog</BlogTitle>
              <BlogMeta className="text-base text-darkGrey flex items-center mb-6">
                <BlogMetaSpan>The Reformist</BlogMetaSpan>
                <BlogMetaDot className="h-2 w-2 rounded-full bg-white mx-[6px]" />
                <BlogMetaSpan>May 29th, 2024</BlogMetaSpan>
              </BlogMeta>
              <BlogHeading className="text-xl md:text-2xl font-semibold line-clamp-2">
                Cryptocurrency vs Tokens
              </BlogHeading>
            </BlogContent>
          </BlogLink>
          <BlogLink
            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
            href="/"
          >
            <BlogImageContainer className="h-60 sm:h-56 relative mb-6">
              <div
                className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollBehavior: "smooth",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  zIndex: 0,
                  height: "100%",
                  width: "100%",
                  animation:
                    "2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse",
                  borderRadius: "1.3rem",
                  backgroundColor: "rgb(96 166 231/0.1)",
                }}
              />
              <BlogImage
                className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                alt="Cryptocurrency and Crypto asset"
                sizes="100vw"
                src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1920&q=75"
              />
            </BlogImageContainer>
            <BlogContent className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
              <BlogTitle className="text-lg font-semibold mb-1">Blog</BlogTitle>
              <BlogMeta className="text-base text-darkGrey flex items-center mb-6">
                <BlogMetaSpan>The Reformist</BlogMetaSpan>
                <BlogMetaDot className="h-2 w-2 rounded-full bg-white mx-[6px]" />
                <BlogMetaSpan>May 29th, 2024</BlogMetaSpan>
              </BlogMeta>
              <BlogHeading className="text-xl md:text-2xl font-semibold line-clamp-2">
                Cryptocurrency and Crypto asset
              </BlogHeading>
            </BlogContent>
          </BlogLink>
        </BlogsGrid>
      </Section>
    </>
  );
}
