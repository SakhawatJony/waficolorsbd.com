import React from "react";
import Slider from "react-slick";
import slide1 from "../../asstes/slide-1.jpg";
import slide2 from "../../asstes/resim7-2.jpg";
import { Box } from "@mui/material";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...props.style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...props.style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Banner = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Box style={{ height: "450px" }}>
            <img style={{ width: "100%", height: "100%" }} src={slide2} />
          </Box>
        </div>
        <div>
          <Box style={{ height: "450px" }}>
            <img style={{ width: "100%", height: "100%" }} src={slide1} />
          </Box>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
