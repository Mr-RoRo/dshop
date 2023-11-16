import { Stack, Typography } from "@mui/material";
import SmartPhone from "../../assets/smartphone.png";
const PopularCategory = () => {
  return (
    <Stack flexDirection="row" mx="108px" my="48px" gap="24px">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Stack
          key={item}
          sx={{
            boxShadow: 1,
            width: "184px",
            height: "196px",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            p: "8px 18px",
          }}
        >
          <Stack
            component="img"
            src={SmartPhone}
            width="148px"
            height="148px"
          />
          <Typography variant="bodyMd">Smart Phone</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default PopularCategory;
