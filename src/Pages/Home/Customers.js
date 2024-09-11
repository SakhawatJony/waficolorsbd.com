import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Customers = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,   
        autoplaySpeed: 1000,  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <Box>
      <Container sx={{ py: "40px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center", py: "10px" }}>
            <Typography
              sx={{
                color: "#0F2027",
                fontSize: "20px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Waficolors BD
            </Typography>
            <Typography
              sx={{
                color: "#203A43",
                fontSize: "40px",
                fontWeight: 600,
                py: "10px",
              }}
            >
              Our Major Customers
            </Typography>
          </Box>
        </Box>
        <Box>
          <Slider {...settings}>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Untitled-design-2022-05-12T144846.631-300x158.png"
                />
              </Box>
            </div>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Untitled-design-2022-05-12T144948.491-300x158.png"
                />
              </Box>
            </div>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Untitled-design-2022-05-12T145407.335-300x158.png"
                />
              </Box>
            </div>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Untitled-design-2022-05-12T145143.808-300x158.png"
                />
              </Box>
            </div>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Untitled-design-2022-05-12T145255.822-300x158.png"
                />
              </Box>
            </div>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Untitled-design-2022-05-12T145515.684-300x158.png"
                />
              </Box>
            </div>
            <div>
              <Box sx={{ border: "3px solid #203A43", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://rkztexbd.com/wp-content/uploads/2022/05/Flag_of_the_United_States.svg"
                />
              </Box>
            </div>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Customers;
