import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Container,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Facebook } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const SubNavBar = () => {
  return (
    <Box sx={{ backgroundColor: "#0f2027", color: "white", p: 2 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <EmailIcon
                sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
              />
              <Typography sx={{ color: "white", fontSize: "15px" }}>
                info@rkztexbd.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <PhoneInTalkIcon
                sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
              />
              <Typography sx={{ color: "white", fontSize: "15px" }}>
                +88 01722-198152
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Facebook
              sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
            />
            <TwitterIcon
              sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
            />
            <YouTubeIcon
              sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
            />
            <InstagramIcon
              sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
            />
            <WhatsAppIcon
              sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
            />
            <LinkedInIcon
              sx={{ color: "rgba(0, 131, 116, 0.8)", fontSize: "20px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubNavBar;
