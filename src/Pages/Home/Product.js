import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const Product = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track which card is hovered

  const products = [
    { title: "REACTIVE DYES", desc: "Reactive Dyes: both 80 deg C & 60 deg C types for dyeing cotton and rayon." },
    { title: "PRINTING DYES", desc: "Printing Dyes: for printing in cotton and rayon." },
    { title: "DIRECT DYES", desc: "Direct Dyes: super type for dyeing cotton, paper and rayon." },
    { title: "ACID DYES", desc: "Acid Dyes: for using in nylon, wool, and silk & special reactive dyes for wool." },
    { title: "LEATHER DYES", desc: "Leather Dyes: for dyeing leather." },
    { title: "DISPERSE DYES", desc: "Disperse Dyes: for using in polyester.Leather Dyes: for dyeing leather." },
    { title: "CATIONIC & BASIC DYES", desc: "Cationic and Basic Dyes: for using in acrylic yarn and paper." },
    { title: "NG PASTE & AUXILIARIES DYES", desc: "NG PASTE & AUXILIARIES Matt White, Pigment paste, Anti-Blocking paste etc." },
  ];

  return (
    <Box>
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
              CHOOSE YOUR Product
            </Typography>
            <Typography
              sx={{
                color: "#203a43",
                fontSize: "40px",
                fontWeight: 600,
                py: "10px",
              }}
            >
              Our Industrial Chemical Products
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={16}>
            {products.map((product, index) => (
              <Grid item md={3} key={index}>
                <Box
                  sx={{
                    borderRadius: "50%",
                    border: hoveredIndex === index ? "5px solid #203A43" : "5px solid #0F2027",
                    height: "180px",
                    width: "100%",
                    background: hoveredIndex === index ? "#0F2027" : "#203A43",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    transform: hoveredIndex === index ? "rotate(360deg)" : "rotate(0deg)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: hoveredIndex === index ? "13.5px" : "20px",
                      transition: "font-size 0.3s ease",
                    }}
                  >
                    {hoveredIndex === index ? product.desc : product.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Product;
