import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme_settings";
import { ColorModeContext } from "../../../theme";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import crowdControlImg from "/Images/crowd_control.png";

const Crowd = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box
            sx={{
                background: `linear-gradient(45deg, ${colors.primary[400]} 30%,  aqua 500%)`,
                borderRadius: "20px",
                p: "20px 40px 10px 40px",
                boxShadow: "0px 0px 10px rgba(0,255,255,0.32)",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: colors.grey[100],
                    fontFamily: ["Young serif", "serif"].join(","),
                    mb: 0,
                    textAlign: "center",
                }}
            >
                Crowd Alert
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{}}>
                    <img
                        src={crowdControlImg}
                        width={"140px"}
                        height={"140px"}
                    />
                </Box>
                <Typography
                    variant="h3"
                    textAlign={"center"}
                    color={"aqua"}
                >
                    In Control
                </Typography>
            </Box>
        </Box>
    );
};

export default Crowd;
