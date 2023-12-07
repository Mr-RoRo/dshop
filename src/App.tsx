import { Stack } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import PopularCategory from "./components/PopularCategory/PopularCategory";
import DiscountedProducts from "./components/DiscountedProducts/DiscountedProducts";
import ProductCardLanding from "./components/ProductCardLanding/ProductCardLanding";
import TopBrands from "./components/TopBrands/TopBrands";
import Banner from "./components/Banner/Banner";
import LandingBlog from "./components/LandingBlog/LandingBlog";
import OurServices from "./components/OurServices/OurServices";

function App() {
  return (
    <Stack>
      <NavBar />
      <Stack mt="100px" mb="56px" mx="108px" gap="48px" alignItems="center">
        <Header />
        <PopularCategory />
        <DiscountedProducts />
        <ProductCardLanding />
        <TopBrands />
        <Banner />
        <LandingBlog />
        <OurServices />
      </Stack>
    </Stack>
  );
}

export default App;
