import { Button, Stack, Typography } from "@mui/material";
import watchs from "../../assets/watchs.png";
const Banner = () => {
  return (
    <Stack width="100%">
      <Stack
        borderRadius={1.5}
        height="420px"
        bgcolor="#223949"
        position="relative"
        overflow="hidden"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p="0 168px 0 64px"
      >
        <Stack
          bgcolor="#FF6951"
          width="800px"
          height="655px"
          borderRadius="800px"
          position="absolute"
          right="-30%"
          top="-25%"
        ></Stack>
        <Stack alignItems="center" color="#fff">
          <Typography variant="h1">SMART WATCH</Typography>
          <Typography variant="h4" mt="16px" mb="32px">
            Various designs and brands
          </Typography>
          <Button
            size="small"
            sx={{ bgcolor: "#FF6951", color: "#223949" }}
            variant="contained"
          >
            view
          </Button>
        </Stack>
        <Stack
          component="img"
          src={watchs}
          width="500px"
          height="338px"
          zIndex={1}
        />
      </Stack>
    </Stack>
  );
};

export default Banner;
