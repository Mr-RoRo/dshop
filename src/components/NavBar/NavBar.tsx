import { Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const NavBar = () => {
  return (
    <Stack
      height="100px"
      px="108px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="primary.50"
      position="fixed"
      width="100%"
      bgcolor="#fff"
      zIndex="100"
    >
      <Stack width="56px" height="63px" component="img" src={logo} />
      <Stack flexDirection="row" gap="48px">
        <Typography variant="bodyLg">Home</Typography>
        <Typography variant="bodyLg">Products</Typography>
        <Typography variant="bodyLg">Blog</Typography>
        <Typography variant="bodyLg">FAQ</Typography>
        <Typography variant="bodyLg">Contact Us</Typography>
      </Stack>
      <Stack gap="8px" flexDirection="row">
        <CiSearch className="react-icons" />
        <CiShoppingBasket className="react-icons" />
        <CiUser className="react-icons" />
      </Stack>
    </Stack>
  );
};

export default NavBar;
