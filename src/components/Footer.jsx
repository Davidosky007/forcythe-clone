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
  background-color: rgb(7 22 38/1);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 7rem;
  padding-right: 4rem;

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-bottom: 2.5rem;
  }
`;

const GridContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
    gap: 2.5rem;
  }
`;

const InputContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  max-width: 32rem;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const InputWrapper = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
`;

const Input = styled.input`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  color: inherit;
  scroll-behavior: smooth;
  grid-column: span 3 / span 3;
  border-start-start-radius: 9999px;
  border-end-start-radius: 9999px;
  border-width: 1px;
  border-color: rgb(255 255 255/1);
  background-color: transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  outline: transparent solid 2px;
  outline-offset: 2px;
  max-width: 100%;
  text-size-adjust: none;
  appearance: none;
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
  cursor: pointer;
  scroll-behavior: smooth;
  height: 100%;
  border-start-end-radius: 9999px;
  border-end-end-radius: 9999px;
  border-width: 1px;
  border-left-width: 0px;
  border-color: rgb(255 255 255/1);
  background-color: rgb(255 255 255/1);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(0 0 0/1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #064386;
    color: white;
  }
`;

const CheckboxContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-top: 1.25rem;
  display: flex;
  gap: 0.75rem;
`;

const CheckboxWrapper = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  display: flex;
  height: 1.25rem;
  width: 1.25rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 2px;
  border-color: rgb(255 255 255/1);
  background-color: transparent;
`;

const Checkbox = styled.input`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  scroll-behavior: smooth;
  display: none;
`;

const Label = styled.label`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const CompanyInfo = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  grid-column: span 2 / span 2;
  text-align: left;
  padding-right: 2.5rem;
  padding-left: 3.5rem;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Logo = styled.img`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  scroll-behavior: smooth;
  z-index: 1;
  margin-bottom: 2rem;
  color: transparent;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

const Description = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: rgb(174 169 177/1);
`;

const SocialLinks = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin-top: 2.5rem;
  align-items: center;
  gap: 0.5rem;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  text-decoration: inherit;
  color: inherit;
  scroll-behavior: smooth;
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 1px;
  border-color: rgb(96 166 231/1);
`;

const SocialIcon = styled.img`
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

const LinksContainer = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-left: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const LinksHeading = styled.h3`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

const LinksList = styled.ul`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  list-style: none;
  margin: 0px;
  padding: 0px;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinkItem = styled.li`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(179 208 242/1);
`;

const Link = styled.a`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  text-decoration: inherit;
  color: inherit;
  scroll-behavior: smooth;
`;

const Copyright = styled.div`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scroll-behavior: smooth;
  border-top-width: 1px;
  border-color: rgb(96 166 231/1);
`;

const CopyrightText = styled.p`
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  scroll-behavior: smooth;
  margin-top: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(179 208 242/1);
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <GridContainer>
          <InputContainer>
            <InputWrapper>
              <Input type="text" placeholder="Your Email Address" />
              <Button>Subscribe</Button>
            </InputWrapper>
            <CheckboxContainer>
              <CheckboxWrapper>
                <Checkbox id="agreement" name="agreement" type="checkbox" />
              </CheckboxWrapper>
              <Label htmlFor="agreement">
                I agree to receive other notifications from Forcythe
              </Label>
            </CheckboxContainer>
          </InputContainer>
          <CompanyInfo>
            <Logo
              height={29}
              width={130}
              alt="Forcythe logo"
              src="https://forcythe.com/images/forcythe logo.svg"
            />
            <Description>
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </Description>
            <SocialLinks>
              <SocialLink href="https://www.facebook.com/forcythe/" target="_blank">
                <SocialIcon
                  height={20}
                  width={20}
                  alt="social"
                  src="https://forcythe.com/images/facebook.svg"
                />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/forcythe" target="_blank">
                <SocialIcon
                  height={20}
                  width={20}
                  alt="social"
                  src="https://forcythe.com/images/instagram.svg"
                />
              </SocialLink>
              <SocialLink href="https://twitter.com/forcythe_" target="_blank">
                <SocialIcon
                  height={20}
                  width={20}
                  alt="social"
                  src="https://forcythe.com/images/x.svg"
                />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/forcythe/" target="_blank">
                <SocialIcon
                  height={19}
                  width={20}
                  alt="social"
                  src="https://forcythe.com/images/linkedin.svg"
                />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@forcythe" target="_blank">
                <SocialIcon
                  height={17}
                  width={20}
                  alt="social"
                  src="https://forcythe.com/images/youtube.svg"
                />
              </SocialLink>
              <SocialLink
                href="https://podcasters.spotify.com/pod/show/the-future-insight"
                target="_blank"
              >
                <SocialIcon
                  height={21}
                  width={20}
                  alt="social"
                  src="https://forcythe.com/images/Icon.svg"
                />
              </SocialLink>
            </SocialLinks>
          </CompanyInfo>
          <LinksContainer>
            <LinksHeading>Company</LinksHeading>
            <LinksList>
              <LinkItem>
                <Link href="https://forcythe.com/about">
                  <span>About</span>
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://forcythe.com/services">
                  <span>Services</span>
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://forcythe.com/services#portfolio">
                  <span>Portfolio</span>
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://forcythe.com/studio">
                  <span>Studio</span>
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://forcythe.com/foundation">
                  <span>Foundation</span>
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://forcythe.com/career">
                  <span>Careers</span>
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://forcythe.com/blog">
                  <span>Blog</span>
                </Link>
              </LinkItem>
            </LinksList>
          </LinksContainer>
        </GridContainer>
        <Copyright>
          <CopyrightText>
            Copyright © 2024 Forcythe. All rights reserved.
          </CopyrightText>
        </Copyright>
      </Section>
    </>
  );
}
