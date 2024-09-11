import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import bg from "../../asstes/background-count-number.png";

const Client = () => {
  const banner = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    backgroundColor: "rgba(32, 58, 67, 0.5)", // Adjust the opacity here (0.5 means 50% opacity)
  };

  return (
    <Box style={banner}>
      <Container sx={{ py: "70px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center", py: "20px" }}>
            <Typography sx={{ color: "white", fontSize: "20px" }}>
              Waficolors BD
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "40px",
                fontWeight: 600,
                py: "10px",
              }}
            >
              Some Important Facts About Us
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "140px" }}>
          <Box>
            <Typography
              sx={{ fontSize: "70px", color: "white", fontWeight: 600 }}
            >
              <CountUp start={0} end={100} duration={2} />+
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                color: "white",
                fontWeight: 600,
                ml: "20px",
              }}
            >
              Products
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "70px", color: "white", fontWeight: 600 }}
            >
              <CountUp start={0} end={60} duration={2} />+
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                color: "white",
                fontWeight: 600,
                ml: "20px",
              }}
            >
              Expats
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "70px", color: "white", fontWeight: 600 }}
            >
              <CountUp start={0} end={1000} duration={2} />+
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                color: "white",
                fontWeight: 600,
                ml: "20px",
              }}
            >
              Happy Clients
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "70px", color: "white", fontWeight: 600 }}
            >
              <CountUp start={0} end={5} duration={2} />+
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                color: "white",
                fontWeight: 600,
                ml: "20px",
              }}
            >
              Years Experience
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Client;
