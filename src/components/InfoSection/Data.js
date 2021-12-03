export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting changed any frrs.",
  buttonLabel: "Get Started",
  imgStart: false, //이미지 왼쪽에, true로 바꾸면 이미지가 오른쪽으로 바뀐다
  img: require("../../assets/images/svg-1.svg"), //실제 화면에 불러와지지 않음....
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or compluter.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: require("../../assets/images/svg-2.svg"),
  alt: "Pig",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 1- minutes. All you need to do is add your information and yo're ready to go.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: require("../../assets/images/svg-3.svg"),
  alt: "Report",
  dark: false,
  primary: false,
  darkText: true,
};
