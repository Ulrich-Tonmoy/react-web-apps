import { ConfirmProvider } from "@/features/confirm/components/provider";
import { RoutesWrapper } from "@/routes";
import { theme } from "@/utils/theme";
import { setupZodErrors } from "@/utils/zodConfig";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();
setupZodErrors();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ConfirmProvider>
            <CssBaseline />
            <SnackbarProvider />
            <RoutesWrapper />
          </ConfirmProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
