import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import logo from "../../../asstes/Logo.pdf-removebg-preview.png";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "Product", value: "product" },
    { label: "Certifications", value: "certifications" },
    { label: "About Us", value: "about" },
    { label: "Blog", value: "blog" },
    { label: "Contact Us", value: "contact" },
  ];

  return (
    <Box
      sx={{
        background: "#203a43",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{height: "150px", width: "30%" }}>
            <img style={{ height: "100%", width: "100%" }} src={logo} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {menuItems.map((item) => (
              <Typography
                key={item.value}
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: activeButton === item.value ? "#AD3DC5" : "white",
                  cursor: "pointer",
                  borderBottom:
                    activeButton === item.value ? "2px solid #AD3DC5" : "none",
                  transform:
                    activeButton === item.value ? "scale(1.1)" : "none",
                  transition: "transform 0.5s ease",
                }}
                onClick={() => handleButtonClick(item.value)}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
