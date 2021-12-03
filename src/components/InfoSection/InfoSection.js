import React from "react";
// import { Button } from "react-scroll";
import { Button } from "../ButtonElements";
import ImgCar from "../../assets/images/svg-1.svg";
import ImgPig from "../../assets/images/svg-2.svg";
import ImgReport from "../../assets/images/svg-3.svg";

import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";

// Data에 있는 img svg파일이 전송이 안되서 직접 소스를 이 페이지에 불러왔음
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0} //1 = true, 0= false
                    dark={dark ? 1 : 0}
                    dark2={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {/* 원래는 <Img src={img} alt={alt} /> 이고, 이게 불러와져야하지만, 이게 안되었기 때문에 방법 변경. */}
                {id === "about" && <Img src={ImgCar} alt={alt} />}
                {id === "discover" && <Img src={ImgPig} alt={alt} />}
                {id === "signup" && <Img src={ImgReport} alt={alt} />}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
