import { IconButton, Stack, Typography } from "@mui/material";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineBookmarks } from "react-icons/md";
import blogcardimage from "../../assets/blogcardimage.png";
import { BsFillBookmarksFill } from "react-icons/bs";
import { useState } from "react";
const BlogCardSquare = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [savedItem, setSavedItem] = useState<number | null>(null);
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      {[1].map((item) => (
        <Stack
          key={item}
          borderRadius={1.5}
          overflow="hidden"
          width="392px"
          height="336px"
          sx={{
            transition: "all 0.5s",
          }}
          gap="8px"
          boxShadow={1}
          onMouseEnter={() => {
            setHoveredItem(item);
          }}
          onMouseLeave={() => {
            setHoveredItem(null);
          }}
        >
          <Stack
            component="img"
            src={blogcardimage}
            width="100%"
            sx={{
              transition: "height 0.3s",
            }}
            height={hoveredItem == item ? "158px" : "204px"}
          />
          <Stack
            gap={hoveredItem == item ? "10px" : "8px"}
            sx={
              {
                //   transition: "gap 0.3s",
              }
            }
            m="0 16px 16px 16px"
          >
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography
                display="flex"
                gap="3px"
                alignItems="center"
                variant="bodyXs"
                color="grey.600"
              >
                <MdOutlineDateRange fontSize="20px" color="inerhirt" />
                August , 8 , 2023
              </Typography>
              <Typography
                variant="bodyXs"
                gap="3px"
                color="grey.600"
                display="flex"
                alignItems="center"
              >
                <MdOutlineTimer fontSize="20px" color="inerhirt" />3 min read
              </Typography>
            </Stack>
            <Typography
              variant="h5"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
              color={hoveredItem == item ? "secondary" : "black"}
              sx={{
                transition: "color 0.3s",
              }}
            >
              Meta Platforms plans to release freeew
            </Typography>
            <Typography
              variant="bodyMd"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              The parent company of Facebook, Meta Platforms, is introducing
              software to help davesdds
            </Typography>
            {hoveredItem == item && (
              <Stack
                color="secondary.main"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="buttonLg">Read More</Typography>
                <IconButton
                  sx={{
                    color: "secondary.main",
                  }}
                  onClick={() => setSavedItem(item)}
                >
                  {savedItem == item ? (
                    <BsFillBookmarksFill
                      className="react-icons"
                      color="inherit"
                    />
                  ) : (
                    <MdOutlineBookmarks
                      className="react-icons"
                      color="inerhirt"
                    />
                  )}
                </IconButton>
              </Stack>
            )}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default BlogCardSquare;
