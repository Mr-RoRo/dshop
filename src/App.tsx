import { Stack } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import PopularCategory from "./components/PopularCategory/PopularCategory";

function App() {
  return (
    <Stack>
      <NavBar />
      <Header />
      <PopularCategory />
    </Stack>
  );
}

export default App;
