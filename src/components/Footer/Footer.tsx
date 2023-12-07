import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";

const company = [
  { id: 1, title: "about us" },
  { id: 2, title: "blog" },
  { id: 3, title: "returns" },
  { id: 4, title: "order status" },
];
const info = [
  { id: 1, title: "How it works?" },
  { id: 2, title: "our promises" },
  { id: 3, title: "FAQ" },
];
const contactUs = [
  { id: 1, title: "123 Main Street, Anytown,USA" },
  { id: 2, title: "+1 (555) 123-4567" },
  { id: 3, title: "TechHeimSupport@gmail.com" },
];
const Footer = () => {
  return (
    <Stack position="relative" overflow="hidden">
      <Stack
        width="100%"
        height="293px"
        bgcolor="primary.900"
        px="108px"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        color="white"
      >
        <Stack flexDirection="row" gap="100px">
          <Stack gap="8px" color="grey.300">
            <Typography color="white" variant="h6">
              Company
            </Typography>
            {company.map((item) => (
              <Typography variant="bodyMd">{item.title}</Typography>
            ))}
          </Stack>
          <Stack gap="8px" color="grey.300">
            <Typography color="white" variant="h6">
              Info
            </Typography>
            {info.map((item) => (
              <Typography variant="bodyMd">{item.title}</Typography>
            ))}
          </Stack>
          <Stack gap="8px" color="grey.300">
            <Typography color="white" variant="h6">
              Contact us
            </Typography>
            {contactUs.map((item) => (
              <Typography variant="bodyMd">{item.title}</Typography>
            ))}
          </Stack>
        </Stack>
        <Stack flexDirection="row" gap="44px">
          <Stack gap="16px">
            <Typography variant="h6">Sign up for News and updates</Typography>
            <TextField
              sx={{
                input: {
                  color: "white",
                  borderColor: "#fff",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              placeholder="E-mail Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LuUser className="react-icons" color="#fff" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <MdArrowForwardIos className="react-icons" color="#fff" />
                  </InputAdornment>
                ),
              }}
            />
            <Stack fontSize="32px" gap="16px" flexDirection="row">
              <RiFacebookBoxLine />
              <CiTwitter />
              <FaInstagram />
              <FiYoutube />
            </Stack>
          </Stack>
          <Stack justifyContent="space-between">
            <IconButton
              sx={{
                bgcolor: "primary.50",
                ":hover": {
                  bgcolor: "primary.50",
                },
              }}
            >
              <GoQuestion />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "primary.50",
                ":hover": {
                  bgcolor: "primary.50",
                },
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <MdKeyboardArrowUp />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width="803px"
        height="361px"
        bgcolor="primary.400"
        borderRadius="50%"
        position="absolute"
        bottom="-300px"
        left="20%"
        sx={{
          opacity: "0.7",
          filter: "blur(100px)",
        }}
      />
      <Stack
        flexDirection="row"
        width="100%"
        height="56px"
        bgcolor="primary.900"
        zIndex={100}
        justifyContent="space-between"
        px="108px"
        alignItems="center"
        color="grey.300"
      >
        <Typography variant="caption">2023 DShop. </Typography>
        <Stack gap="48px" flexDirection="row">
          <Typography variant="captionMd">cookie settings</Typography>
          <Typography variant="captionMd">Privacy Policy</Typography>
          <Typography variant="captionMd">Terms and Conditions </Typography>
          <Typography variant="captionMd">Imprint</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
