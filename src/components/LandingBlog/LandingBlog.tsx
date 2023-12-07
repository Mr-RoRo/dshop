import { Stack, Typography, IconButton } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCardSquare from "../BlogCardSquare/BlogCardSquare";
import BlogCardRectangle from "../BlogCardRectangle/BlogCardRectangle";

const LandingBlog = () => {
  return (
    <Stack width="100%" gap="32px">
      <Stack
        height="64px"
        borderBottom="1px solid"
        borderColor="gray.400"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">Our Blogs</Typography>
        <IconButton color="inherit">
          <Typography variant="bodyLg">View all</Typography>
          <MdKeyboardArrowRight className="react-icons" />
        </IconButton>
      </Stack>
      <Stack flexDirection="row" justifyContent="center" gap="24px">
        <BlogCardSquare />
        <BlogCardRectangle />
      </Stack>
    </Stack>
  );
};

export default LandingBlog;
