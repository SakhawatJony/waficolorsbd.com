import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Product from "./Product";

const AboutUs = () => {
  return (
    <Box sx={{  height: "1300px", }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center", py: "20px" }}>
            <Typography sx={{ color: "#6D6565", fontSize: "20px" }}>
              Welcome to Waficolors BD
            </Typography>
            <Typography
              sx={{
                color: "#203a43",
                fontSize: "35px",
                fontWeight: 600,
                py: "10px",
              }}
            >
              We Provide World Class Industrial Chemical <br /> Trims &
              Accessories
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
          <Box>
            <Box>
              <Typography
                sx={{
                  color: "#49575F",
                  fontSize: "35px",
                  fontWeight: 600,
                  py: "10px",
                  //   borderBottom:"2px solid #203a43",
                  //   borderWidth:"px"
                }}
              >
                Offering Industrial <br /> Chemical in Bangladesh
              </Typography>
              <Typography sx={{ py: "5px" }}>
                Waficolors BD came into the light in 2021, Since then it
                represented itself mainly as the textile screen printing
                chemicals and machineries supplier. Its also represented the
                best quality work in the field of Screen printing and All over
                print area. Waficolors BD is a first growing and popular company
                in Bangladesh. Waficolors BD is a distinction for indenting
                signature products and providing quality service. It religiously
                sticks to its pledge to assure quality service. Waficolors BD
                underlines commitment as the first priority and believes profit
                as its logical consequence
              </Typography>
              <Button
                sx={{
                  background: "#203A43",
                  my: "5px",
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: "15px",
                  ":hover": {
                    background: "#203A43",
                    color: "white",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
          <Box sx={{ borderLeft: "8px solid #203A43" }}>
            <img
              style={{ borderRadius: "0px 10px 10px 10px" }}
              src="https://rkztexbd.com/wp-content/uploads/2022/05/140319074619797_Chemical-1.jpg"
            />
          </Box>
        </Box>
      </Container>
      <Product />
    </Box>
  );
};

export default AboutUs;
