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
