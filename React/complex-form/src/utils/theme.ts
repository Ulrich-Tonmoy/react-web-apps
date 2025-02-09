import { Link } from "@/components/link";
import { createTheme } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
    MuiTextField: {
      defaultProps: {
        slotProps: {
          inputLabel: {
            shrink: true,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
});

export { theme };
