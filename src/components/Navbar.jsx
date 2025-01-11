import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.8rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  z-index: 30;
  background-color: rgba(3, 5, 22, 0.5);
  backdrop-filter: blur(12px);
  font-family: 'Lexend Regular';

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

const NavbarLogo = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
  vertical-align: middle;

  @media (max-width: 768px) {
    width: 7rem;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;

  a {
    text-decoration: inherit;
    color: white;
  }

  span {
    cursor: pointer;
    font: 16px / 24px 'Lexend Regular';
    line-height: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarButtonContainer = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
    margin-right: 80px;
  }
`;

const NavbarButtonGroup = styled.div`
  position: relative;
  width: fit-content;
`;

const NavbarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 10;
  cursor: pointer;
  position: relative;
  padding: 12px 1.25rem;
  border-radius: 9999px;
  background-color: white;
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: pulse 2s infinite;

  &:hover {
    background-color: blue;
    color: white;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const NavbarButtonBorder = styled.div`
  position: absolute;
  border: 0px solid rgb(229, 231, 235);
  top: 0.375rem;
  right: 0.375rem;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: dashed;
  border-radius: 9999px;
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${NavbarButtonGroup}:hover & {
    border-color: blue;
  }
`;

const NavbarMenu = styled.div`
  display: none;
  cursor: pointer;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;

  @media (max-width: 768px) {
    display: block;
    margin-right: 10px;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer className="section-padding navbar w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md">
      <NavbarContent>
        <a href="/">
          <NavbarLogo
            height={31}
            width={140}
            alt="Forcythe logo"
            src="https://forcythe.com/images/forcythe logo.svg"
          />
        </a>
        <NavbarLinks>
          <a href="/about"><span>About</span></a>
          <a href="/services"><span>Services</span></a>
          <a href="/services#portfolio"><span>Portfolio</span></a>
          <a href="/studio"><span>Studio</span></a>
          <a href="/foundation"><span>Foundation</span></a>
        </NavbarLinks>
      </NavbarContent>
      <NavbarButtonContainer>
        <NavbarButtonGroup>
          <NavbarButton
          >
            Book a Call
          </NavbarButton>
          <NavbarButtonBorder />
        </NavbarButtonGroup>
      </NavbarButtonContainer>
      <NavbarMenu>
        <img height={18} width={18} alt="menu" src="https://forcythe.com/images/menu.svg" />
      </NavbarMenu>
    </NavbarContainer>
  );
}
