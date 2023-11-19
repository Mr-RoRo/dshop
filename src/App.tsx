import { Stack } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import PopularCategory from "./components/PopularCategory/PopularCategory";
import DiscountedProducts from "./components/DiscountedProducts/DiscountedProducts";
import ProductCardLanding from "./components/ProductCardLanding/ProductCardLanding";

function App() {
  return (
    <Stack>
      <NavBar />
      <Header />
      <Stack mt="48px" mb="56px" mx="108px" gap="48px" alignItems="center">
        <PopularCategory />
        <DiscountedProducts />
        <ProductCardLanding />
      </Stack>
    </Stack>
  );
}

export default App;
