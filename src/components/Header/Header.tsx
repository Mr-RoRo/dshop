import { Stack, Typography, Button } from "@mui/material";
import header from "../../assets/header.png";

const Header = () => {
  return (
    <Stack px="108px" flexDirection="row" justifyContent="space-between">
      <Stack my="56px" justifyContent="space-between">
        <Stack gap="50px">
          <Typography variant="display1">DShop</Typography>
          <Typography variant="h3">
            "Join the{" "}
            <Typography variant="h3" component="span" color="secondary.main">
              digital revolution
            </Typography>
            "
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ borderRadius: 2, width: "288px", height: "56px" }}
        >
          Explore More
        </Button>
      </Stack>
      <Stack component="img" src={header} />
    </Stack>
  );
};

export default Header;
