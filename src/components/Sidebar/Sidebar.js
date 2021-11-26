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

// 화면사이즈가 작아졌을때 필요한 컴포넌트
// isOpen이 True일때,
// toggle 버튼이 눌릴때마다, 매번 사이드바가 내려갔다 올라갔다 작동함
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
