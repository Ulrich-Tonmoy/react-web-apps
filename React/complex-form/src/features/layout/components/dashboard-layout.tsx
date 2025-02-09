import { ThemeToggle } from "@/features/layout/components/theme-toggle";
import { useStore } from "@/features/layout/hooks/useStore";
import { DRAWER_WIDTH } from "@/features/layout/utils/constants";
import { d } from "@/utils/dictionary";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Paper, Stack } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const theme = useTheme();

  const { drawerOpen, updateDrawerOpen } = useStore();

  const handleDrawerOpen = () => {
    updateDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    updateDrawerOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MuiAppBar
        position="fixed"
        sx={{
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(drawerOpen && {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: `${DRAWER_WIDTH}px`,
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(drawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 1,
              alignItems: "center",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              {d.dashboard}
            </Typography>
            <ThemeToggle />
          </Stack>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/employee/personal-info">
              <ListItemIcon>
                <BadgeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={d.newEmployee} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${DRAWER_WIDTH}px`,
          ...(drawerOpen && {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Box sx={{ ...theme.mixins.toolbar }} />

        <Paper sx={{ padding: 3 }}>
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
};

export { DashboardLayout };
