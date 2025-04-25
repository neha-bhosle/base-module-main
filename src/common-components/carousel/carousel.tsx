import React, { useEffect, useState } from "react";
import loginScreen1 from "../../assets/images/login01.svg";
import loginScreen2 from "../../assets/images/login02.svg";
import loginScreen from "../../assets/images/login03.svg";
import loginScreenStatic from "../../assets/images/loginScreenStatic.svg";
import { carouselStyles } from "./widgets/carouselStyles";

function Carousel() {
  // const sideImages = [loginScreen2, loginScreen1, loginScreen];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (index === 2) {
  //       setIndex(0);
  //     } else {
  //       setIndex((prev) => prev + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [index]);

  return (
    <img
      src={loginScreenStatic}
      alt="Login Screen"
      height={"100%"}
      width={"100%"}
      style={carouselStyles}
    />
  );
}

export default Carousel;
