import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ServicesSection from "../components/Sevices/ServicesSection";
import FooterSection from "../components/Footer/FooterSection";

const Home = () => {
  // 사이드바는 모바일크기일때만 메뉴버튼이 생성되고, 그때 동작이 다름
  // 사이드바가 오픈일때, 아닐때
  const [isOpen, setIsOpen] = useState(false);

  // 사이드바를 끄고, 켜고 하는 기능
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
      <InfoSection {...homeObjThree} />
      <FooterSection />
    </>
  );
};

export default Home;
