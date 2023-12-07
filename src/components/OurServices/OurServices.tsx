import { Stack, Typography } from "@mui/material";
import icon1 from "../../assets/service2.png";
import icon2 from "../../assets/service3.png";
import icon3 from "../../assets/service1.png";
import icon4 from "../../assets/service4.png";
const info = [
  {
    id: 1,
    title: "Latest and Greatest Tech",
    icon: icon1,
    width: "40px",
    height: "33px",
  },
  { id: 2, title: "Guarantee", icon: icon2, width: "40px", height: "43px" },
  {
    id: 3,
    title: "Free Shipping over 1000$",
    icon: icon3,
    width: "62px",
    height: "30px",
  },
  { id: 4, title: "24/7 Support", icon: icon4, width: "40px", height: "45px" },
];
const OurServices = () => {
  return (
    <Stack
      width="100%"
      justifyContent="space-between"
      gap="98.5"
      px="108px"
      height="100px"
      alignItems="center"
      flexDirection="row"
    >
      {info.map((item) => (
        <Typography
          key={item.id}
          variant="bodyXl"
          alignItems="center"
          display="flex"
          gap="16px"
        >
          <Stack
            component="img"
            src={item.icon}
            width={item.width}
            height={item.height}
          />
          {item.title}
        </Typography>
      ))}
    </Stack>
  );
};

export default OurServices;
