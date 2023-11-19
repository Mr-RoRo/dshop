import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import photo from "../../assets/smartphone.png";
import { useState } from "react";
const ProductCardLanding = () => {
  const [isLike, setIsLike] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <Stack width="100%" height="443px" gap="32px">
      <Stack
        height="64px"
        borderBottom="1px solid"
        borderColor="gray.400"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">New Products</Typography>
        <IconButton color="inherit">
          <Typography variant="bodyLg">View all</Typography>
          <MdKeyboardArrowRight className="react-icons" />
        </IconButton>
      </Stack>
      <Stack flexDirection="row" gap="24px">
        {[1, 2, 3, 4].map((item) => (
          <Stack
            key={item}
            width="288px"
            height="347px"
            p="16px"
            gap="16px"
            boxShadow={hoveredItem == item ? 2 : 1}
            sx={{ transition: "box-shadow 0.2s" }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Stack
              width="256px"
              height="190px"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <IconButton
                sx={{
                  color: "primary.500",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  opacity: hoveredItem == item ? 1 : 0,
                  transition: "opacity 0.2s ease-in",
                }}
                onClick={() => setIsLike(!isLike)}
              >
                {isLike ? (
                  <IoMdHeart className="react-icons" color="inherit" />
                ) : (
                  <CiHeart className="react-icons" color="inherit" />
                )}
              </IconButton>
              <Stack
                component="img"
                src={photo}
                width={hoveredItem == item ? "256px" : "217px"}
                height={hoveredItem == item ? "190px" : "161px"}
                sx={{
                  transition: "width 0.4s,height 0.4s",
                }}
              />
            </Stack>
            <Stack
              sx={{
                position: "relative",
                overflow: "hidden",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background:
                    "linear-gradient(to right, rgba(68,68,68,0.10), rgba(16,16,16,0.70), rgba(68,68,68,0.10) )",
                  zIndex: -1,
                },
              }}
            >
              <Divider />
            </Stack>
            <Stack height="49px" justifyContent="center">
              <Typography
                color={hoveredItem == item ? "primary.500" : "#000"}
                variant="bodyMd"
              >
                Iphone 14 promax 256 gig
              </Typography>
            </Stack>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="bodyLg">$930.90</Typography>
              <Stack
                color="primary.500"
                flexDirection="row"
                alignItems="center"
                gap="2px"
              >
                <FaStar color="inherit" />
                <Typography variant="h6">4.1</Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductCardLanding;
