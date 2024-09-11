import { Box } from "@mui/material";
import SubNavBar from "./Pages/Shared/SubNavBar/SubNavBar";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Box>
      <SubNavBar />
      <NavBar/>
      <Home/>
    </Box>
  );
}

export default App;
