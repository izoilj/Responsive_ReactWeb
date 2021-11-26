import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
  SideBtnWrap,
  SidebarRouter,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="about" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLinks to="discover" onClick={toggle}>
            Discover
          </SidebarLinks>
          <SidebarLinks to="services" onClick={toggle}>
            Services
          </SidebarLinks>
          <SidebarLinks to="signup" onClick={toggle}>
            Sign Up
          </SidebarLinks>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to="/signin">Sign In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
