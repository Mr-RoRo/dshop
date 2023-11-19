import { Shadows, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    bodyXl: React.CSSProperties;
    bodyLg: React.CSSProperties;
    bodyMd: React.CSSProperties;
    bodySm: React.CSSProperties;
    bodyXs: React.CSSProperties;
    captionLg: React.CSSProperties;
    captionMd: React.CSSProperties;
    captionSm: React.CSSProperties;
    buttonLg: React.CSSProperties;
    buttonSm: React.CSSProperties;
    overlineLg: React.CSSProperties;
    overlineSm: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    bodyXl?: React.CSSProperties;
    bodyLg?: React.CSSProperties;
    bodyMd?: React.CSSProperties;
    bodySm?: React.CSSProperties;
    bodyXs?: React.CSSProperties;
    captionLg?: React.CSSProperties;
    captionMd?: React.CSSProperties;
    captionSm?: React.CSSProperties;
    buttonLg?: React.CSSProperties;
    buttonSm?: React.CSSProperties;
    overlineLg?: React.CSSProperties;
    overlineSm?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    bodyXl: true;
    bodyLg: true;
    bodyMd: true;
    bodySm: true;
    bodyXs: true;
    captionLg: true;
    captionMd: true;
    captionSm: true;
    buttonLg: true;
    buttonSm: true;
    overlineLg: true;
    overlineSm: true;
  }
}

const theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    primary: {
      main: "#0C68F4",
      "300": "#E4EEFE",
      "50": "#AECDFB",
      "800": "#78ABF9",
      "100": "#428AF6",
      "200": "#2779F5",
      "400": "#0951BE",
      "500": "#063A88",
      "600": "#052E6D",
      "700": "#042352",
      "900": "#021736",
    },
    secondary: {
      main: "#f45e0c",
      "100": "#FDDBC9",
      "200": "#FAB793",
      "300": "#F68242",
      "400": "#F45E0C",
      "500": "#BE4909",
      "600": "#883406",
    },
    grey: {
      "50": "#f9f9f9",
      "100": "#F6F6F6",
      "200": "#EDEDED",
      "300": "#CBCBCB",
      "400": "#B4B4B4",
      "500": "#9E9E9E",
      "600": "#717171",
      "700": "#505050",
      "800": "#444444",
      "900": "#2D2D2D",
    },
    error: {
      main: "#C91433",
      light: "#FAE7EB",
    },
    success: {
      main: "#198754",
      light: "#D1F7E5",
    },
  },
  spacing: 4,
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    display1: {
      fontSize: "64px",
      fontWeight: "600",
    },
    display2: {
      fontSize: "56px",
      fontWeight: "600",
    },
    h1: {
      fontSize: "44px",
      fontWeight: "500",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "500",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "500",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "500",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "500",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "500",
    },
    bodyXl: {
      fontSize: "20px",
      fontWeight: "300",
    },
    bodyLg: {
      fontSize: "18px",
      fontWeight: "300",
    },
    bodyMd: {
      fontSize: "16px",
      fontWeight: "300",
    },
    bodySm: {
      fontSize: "14px",
      fontWeight: "300",
    },
    bodyXs: {
      fontSize: "12px",
      fontWeight: "300",
    },
    captionLg: {
      fontSize: "14px",
      fontWeight: "500",
    },
    captionMd: {
      fontSize: "12px",
      fontWeight: "500",
    },
    captionSm: {
      fontSize: "10px",
      fontWeight: "500",
    },
    buttonLg: {
      fontSize: "16px",
      fontWeight: "300",
    },
    buttonSm: {
      fontSize: "14px",
      fontWeight: "300",
    },
    overlineLg: {
      fontSize: "16px",
      fontWeight: "300",
    },
    overlineSm: {
      fontSize: "12px",
      fontWeight: "500",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { size: "small" },
          style: {
            width: "316px",
            height: "48px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: "397px",
            height: "48px",
          },
        },
      ],
    },
    MuiIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: "16.40px",
          height: "16.40px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: "16.40px",
          height: "16.40px",
        },
        root: {
          ":hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          width: "182px",
          height: "48px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },

  shadows: Array(25)
    .fill("")
    .map((_, index) =>
      index === 1
        ? "-2px 2px 15px -1px rgba(113, 113, 113, 0.12);"
        : index === 2
        ? "-2px 2px 20px -1px rgba(113, 113, 113, 0.20)"
        : index === 3
        ? "-2px 2px 10px -1px rgba(113, 113, 113, 0.15)"
        : ""
    ) as Shadows,
});

export default theme;
