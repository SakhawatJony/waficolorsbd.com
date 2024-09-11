import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../../asstes/Logo.pdf-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box>
      <Box sx={{ background: "#203A43", height: "100%" }}>
        <Container>
          <Grid container spacing={3} sx={{ py: "80px" }}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box>
                <Box sx={{ width: "300px", height: "300px", ml: -7 }}>
                  <img style={{ width: "100%", height: "100%" }} src={logo} />
                </Box>
                <Box sx={{ mt: -5 }}>
                  <Typography sx={{ color: "white" }}>
                    We are pleased to take this opportunity to introduce
                    ourselves to you as one of the most reputable dyestuffs,
                    pigments and auxiliary manufacturers:Waficolors BD
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box sx={{ pt: "90px" }}>
                <Box sx={{ borderBottom: "1px solid white", pt: "20px" }}>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 600, color: "white" }}
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Box sx={{ pt: "30px" }}>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    Address :
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    House#21, Block#A, Ave#1, Section#11, Mirpur, Dhaka#1216.
                  </Typography>
                </Box>
                <Box sx={{ pt: "10px" }}>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    Email :
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    waficolorsbd@gamil.com
                  </Typography>
                </Box>
                <Box sx={{ pt: "10px" }}>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    Mobile :
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    +88 01714-810148
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    +88 01682-714945
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box sx={{ pt: "90px" }}>
                <Box sx={{ borderBottom: "1px solid white", pt: "20px" }}>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 600, color: "white" }}
                  >
                    Quick Links
                  </Typography>
                </Box>
                <Box sx={{ pt: "30px", gap: "30px" }}>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    About Us
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    Contact Us
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    Blog
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box sx={{ pt: "90px" }}>
                <Box sx={{ borderBottom: "1px solid white", pt: "20px" }}>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 600, color: "white" }}
                  >
                    On Map
                  </Typography>
                </Box>
                <Box sx={{ pt: "30px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116807.36739340708!2d90.28736795530358!3d23.8104107747891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1000ebad489%3A0xc4a8c3ff02c24dfc!2sHouse-11%2CLane-1%2CBlock-A%2CBanaroshi%20Polli%2CMirpur-10%2CDhaka-1216!5e0!3m2!1sen!2sbd!4v1726082271880!5m2!1sen!2sbd"
                    style={{ border: 0, width: "100%", hegiht: "400px" }} // Correct style prop format
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#0F2027", py: "20px" }}>
        <Container>
          <Box
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              © {currentYear} All rights reserved waficolorsbd.com
            </Typography>
            <Typography>
              Design By{" "}
              <span
                style={{ color: "#AD3DC5", fontSize: "20px", fontWeight: 600 }}
              >
                sakhawathosen
              </span>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
