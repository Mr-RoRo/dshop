import { Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import SmartPhone from "../../assets/smartphone.png";
import BlueShape from "../../assets/BlueShape.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const DiscountedProducts = () => {
  return (
    <Stack
      flexDirection="row"
      borderRadius={2}
      height="325px"
      bgcolor="primary.500"
      width="100%"
      alignItems="center"
      position="relative"
    >
      <Stack color="#fff" width="400px" alignItems="center">
        <Typography variant="h4">Products On Sale</Typography>
        <Typography mt="8px" mb="88px" variant="bodyXl">
          Shop Now!
        </Typography>
        <Typography variant="buttonLg">View all {">"}</Typography>
      </Stack>
      <Stack
        position="absolute"
        component="img"
        src={BlueShape}
        width="370px"
        top="0"
        left="0"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <Stack
              sx={{
                width: "184px",
                height: "237px",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                p: "8px",
                bgcolor: "#fff",
                borderRadius: 1,
                position: "relative",
                transition: "transform 0.35s",
                ":hover":{
                  transform:"scale(1.05)",
                }
              }}
            >
              <Stack
                position="absolute"
                p="4px 6px"
                bgcolor="secondary.100"
                width="42px"
                height="23px"
                borderRadius="0 8px 8px 0"
                left="0"
                top="8px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography color="secondary.400" variant="bodySm">
                  %30
                </Typography>
              </Stack>
              <Stack
                component="img"
                src={SmartPhone}
                width="168px"
                height="146px"
              />
              <Stack gap="9px" width="100%" alignSelf="flex-start">
                <Typography variant="bodyMd">Smart Phone</Typography>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography
                    variant="bodyXs"
                    color="gray.600"
                    sx={{ textDecoration: "line-through" }}
                  >
                    $38.00
                  </Typography>
                  <Typography variant="bodySm">$19.00</Typography>
                </Stack>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default DiscountedProducts;
