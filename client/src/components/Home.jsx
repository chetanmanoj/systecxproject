import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//PAGES AND COMPONENTS
import { Dashboard, Transactions } from "../pages";
import { sections } from "../data/sections";

//IMAGES
import logotitle from "../assets/logotitle.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// MAIN FUNCTION
export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("Dashboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{
              marginRight: 5,
              ...(!open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="flex flex-row justify-between">
          <Typography variant="h6" noWrap component="div">
            <img src={logotitle} alt="Logo" className="flex" />
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {sections.map((section, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", fontFamily:'poppins' }}
              onClick={() => setPage(section.title)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <img src={section.icon} alt={section.title} 
                   style={{ fill: page === section.title ? '#2C67FF' : '#383838'}}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={section.title}
                  sx={{ opacity: open ? 1 : 0 ,  fontWeight:500,
                      color: page === section.title ? '#2C67FF' : '#383838'

                   }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1,  color: "#000" }}>
        <DrawerHeader />
        {page === "Dashboard" && <Dashboard />}
        {/* {page === "Customers" && <Dashboard />} 
        {page === "Suppliers" && <Dashboard />}
        {page === "Financial Institutions" && <Dashboard />}
        {page === "Products" && <Dashboard />} */}
        {page === "Trading" && <Transactions />}
       {/*  {page === "Reports" && <Dashboard />}
        {page === "Sales" && <Dashboard />}
        {page === "Purchases" && <Dashboard />}
        {page === "FAQ" && <Dashboard />} */}
      </Box>
    </Box>
  );
}
