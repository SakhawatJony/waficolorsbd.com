import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LetestNews = () => {
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
              Our Letest News...
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://rkztexbd.com/wp-content/uploads/2022/05/labequipment-5b56fd6246e0fb00371e0095-1-1536x1152.jpg"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#203A43",
                        fontWeight: 600,
                      }}
                    >
                      Having joined Stowlin Limited
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Having joined Stowlin Limited in October of last year, and
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        color: "white",
                        background: "#203A43",
                        textTransform: "capitalize",
                        px: "10px",
                      }}
                      size="small"
                    >
                      Read More...
                    </Button>
                  </CardActions>
                  <CardActions
                    sx={{
                      borderTop: "1px solid #203A43",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: "#203A43" }}>
                      May 11, 2022{" "}
                    </Typography>{" "}
                    .
                    <Typography sx={{ fontSize: "13px", color: "#203A43" }}>
                      No Comments
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://rkztexbd.com/wp-content/uploads/2022/05/140319074619797_Chemical-1.jpg"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#203A43",
                        fontWeight: 600,
                      }}
                    >
                      Having joined Stowlin Limited
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Having joined Stowlin Limited in October of last year, and
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        color: "white",
                        background: "#203A43",
                        textTransform: "capitalize",
                        px: "10px",
                      }}
                      size="small"
                    >
                      Read More...
                    </Button>
                  </CardActions>
                  <CardActions
                    sx={{
                      borderTop: "1px solid #203A43",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: "#203A43" }}>
                      May 11, 2022{" "}
                    </Typography>{" "}
                    .
                    <Typography sx={{ fontSize: "13px", color: "#203A43" }}>
                      No Comments
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://rkztexbd.com/wp-content/uploads/2022/05/labequipment-5b56fd6246e0fb00371e0095-1-1536x1152.jpg"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#203A43",
                        fontWeight: 600,
                      }}
                    >
                      Having joined Stowlin Limited
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Having joined Stowlin Limited in October of last year, and
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        color: "white",
                        background: "#203A43",
                        textTransform: "capitalize",
                        px: "10px",
                      }}
                      size="small"
                    >
                      Read More...
                    </Button>
                  </CardActions>
                  <CardActions
                    sx={{
                      borderTop: "1px solid #203A43",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: "#203A43" }}>
                      May 11, 2022{" "}
                    </Typography>{" "}
                    .
                    <Typography sx={{ fontSize: "13px", color: "#203A43" }}>
                      No Comments
                    </Typography>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", my: "20px" }}>
            <Button
              sx={{
                color: "white",
                background: "#203A43",
                textTransform: "capitalize",
                width:"160px"
              }}
            
            >
              Show All
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LetestNews;
