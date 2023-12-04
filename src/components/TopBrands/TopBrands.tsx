import { Stack, Typography, IconButton } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import Brand from "../../assets/brandSam.png";

const TopBrands = () => {
  return (
    <Stack width="100%" height="155px" gap="32px">
      <Stack
        height="64px"
        borderBottom="1px solid"
        borderColor="gray.400"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">Top Brands</Typography>
        <IconButton color="inherit">
          <Typography variant="bodyLg">View all</Typography>
          <MdKeyboardArrowRight className="react-icons" />
        </IconButton>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Stack component="img" key={item} src={Brand} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TopBrands;
