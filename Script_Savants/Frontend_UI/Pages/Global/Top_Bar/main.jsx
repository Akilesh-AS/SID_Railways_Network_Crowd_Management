import {
    Box,
    Typography,
    Avatar,
    IconButton,
    useTheme,
    InputBase,
} from "@mui/material";
import React, { useContext } from "react";
import { Image } from "@mui/icons-material";
import { tokens } from "../../../theme_settings";
import { ColorModeContext } from "../../../theme";
import logoImage from "/Images/Team_Logo.jpg";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                m: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography variant="h3" color={colors.grey[100]} color={"aqua"}>
                Divya Drishti: AI-Powered surveillance
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <Box>
                    <Box
                        display={"flex"}
                        backgroundColor={colors.primary[400]}
                        borderRadius={"25px"}
                        width={"150px"}
                        height={"40px"}
                        alignItems={"center"}
                        padding={"10px"}
                        justifyContent={"space-between"}
                        marginRight={"20px"}
                        boxShadow={"0px 0px 5px rgba(0,255,255,0.36)"}
                    >
                        <IconButton type="button" sx={{ color: "aqua" }}>
                            <SearchIcon />
                        </IconButton>
                        <InputBase sx={{ ml: 1 }} placeholder="Search" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Avatar
                        src={logoImage}
                        sx={{
                            width: "50px",
                            height: "50px",
                            boxShadow: "0px 0px 20px aqua",
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            mt: "2px",
                            fontFamily: ["Oswald", "serif"].join(","),
                            fontWeight: "350",
                            color: "aqua",
                            textShadow: "0px 0px 5px rgb(255,255,255)",
                        }}
                    >
                        Script Savants
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TopBar;
