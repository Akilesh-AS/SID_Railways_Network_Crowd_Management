import * as React from "react";
import { Avatar, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { tokens } from "../../../theme_settings";
import { ColorModeContext } from "../../../theme";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Item } from "./List_Item";
import adminImage from "/Images/Favicon_Image.jpeg";
// import StatusIcon from "/Images/Icons/Status.svg";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ArticleIcon from "@mui/icons-material/Article";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import OutboxIcon from "@mui/icons-material/Outbox";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const drawerWidth = 250;

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
    justifyContent: open ? "flex-end" : "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
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

const Side_Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = React.useContext(ColorModeContext);

    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState("Status Bar");

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const listItemsElements = [
        {
            icon: <LeaderboardIcon />,
            title: "Status Bar",
            to: "/",
        },
        {
            icon: <EmergencyRecordingIcon />,
            title: "Recordings",
            to: "/Live_Recordings",
        },
        {
            icon: <PeopleIcon />,
            title: "Crowd",
            to: "/Live_Crowd_Density",
        },
        {
            icon: <NewReleasesIcon />,
            title: "Crime",
            to: "/Crime_Notifications_Alert",
        },
        {
            icon: <EngineeringIcon />,
            title: "Workers",
            to: "/Workers_Record_Details_List",
        },
        {
            icon: <OutboxIcon />,
            title: "Complaint",
            to: "/Complaint_Registration",
        },
        {
            icon: <ArticleIcon />,
            title: "Documents",
            to: "/Documentation_Details",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column-reverse",
            }}
        >
            <Box
                sx={{
                    "& .css-15b8vjn-MuiPaper-root-MuiDrawer-paper": {
                        borderRight: "0px",
                        background: `linear-gradient(270deg, transparent, aqua 200% )`,
                    },
                }}
            >
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{ position: "relative" }}
                >
                    <DrawerHeader
                        sx={{ justifyContent: open ? "flex-end" : "center" }}
                    >
                        {open ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}
                            >
                                <IconButton
                                    sx={{
                                        justifyContent: "start",
                                    }}
                                    onClick={colorMode.toggleColorMode}
                                >
                                    {theme.palette.mode === "dark" ? (
                                        <DarkModeOutlinedIcon />
                                    ) : (
                                        <LightModeOutlinedIcon />
                                    )}
                                </IconButton>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Box>
                        ) : (
                            <IconButton onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </DrawerHeader>
                    <List>
                        {listItemsElements.map((item, index) => (
                            <Item
                                icon={item.icon}
                                title={item.title}
                                key={index}
                                open={open}
                                to={item.to}
                            />
                        ))}
                        <ListItem>
                            {open ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "80%",
                                        // bgcolor: colors.primary[500],
                                        opacity: "1",
                                        p: 1,
                                        borderRadius: "100px",
                                        boxShadow: "0px 0px 5px rgb(0,255,255)",
                                        mt: 48,
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: colors.grey[100],
                                            ml: 3,
                                        }}
                                    >
                                        Admin
                                    </Typography>
                                    <Avatar
                                        src={adminImage}
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                        }}
                                    />
                                </Box>
                            ) : (
                                <Avatar
                                    src={adminImage}
                                    sx={{
                                        width: "30px",
                                        height: "30px",
                                        mt: 52,
                                        boxShadow:
                                            "0px 0px 10px rgba(0,255,255,0.62)",
                                    }}
                                />
                            )}
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
        </Box>
    );
};

export default Side_Navbar;
