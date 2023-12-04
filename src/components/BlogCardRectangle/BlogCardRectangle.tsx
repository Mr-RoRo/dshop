import { IconButton, Stack, Typography } from "@mui/material";
import image from "../../assets/blogcardimage.png";
import { MdOutlineDateRange } from "react-icons/md";
import { BsFillBookmarksFill } from "react-icons/bs";
import { MdOutlineBookmarks } from "react-icons/md";

import { useState } from "react";

const BlogCardRectangle = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [savedItem, setSavedItem] = useState<number | null>(null);
  return (
    <Stack gap="15px">
      {[1, 2, 3].map((item) => (
        <Stack
          flexDirection="row"
          width="704px"
          height="156px"
          overflow="hidden"
          borderRadius={1.5}
          boxShadow={1}
          alignItems="center"
          onMouseEnter={() => {
            setHoveredItem(item);
          }}
          onMouseLeave={() => {
            setHoveredItem(null);
          }}
        >
          <Stack component="img" src={image} width="240px" height="100%" />
          <Stack p="0 12px 0 16px">
            <Typography
              variant="h6"
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
              variant="bodySm"
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
            <Stack
              my="16px"
              height="20px"
              flexDirection="row"
              justifyContent="space-between"
            >
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

              <IconButton
                sx={{
                  opacity: hoveredItem == item ? 1 : 0,
                  transition: "opacity 0.3s",
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
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default BlogCardRectangle;
