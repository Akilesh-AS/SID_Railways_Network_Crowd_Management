import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme_settings";
import { ColorModeContext } from "../../../theme";
import { CardCover } from "@mui/joy";
// import processedVideo from "./processed_data.mp4";
import teamLogo from "/Images/Team_Logo.jpg";
import "/node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import CardMedia from "@mui/material/CardMedia";


export const CrowdVideo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                background: `linear-gradient(45deg, ${colors.primary[400]} 30%,  aqua 500%)`,
                borderRadius: "20px",
                p: "40px 60px 30px 60px",
                boxShadow: "0px 0px 10px rgba(0,255,255,0.32)",
                //   display: "flex",
                // justifyContent: "space-evenly",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontFamily: ["Young serif", "serif"].join(","),
                    mb: 0,
                    textAlign: "start",
                    mb: 3,
                }}
            >
                Live Crowd Density
            </Typography>
            <Box
                sx={{
                    width: "570px",
                    height: "325px",
                    borderRadius: "10px 10px 10px 10px",
                    overflow: "hidden",
                    m: "0px 0px 0px 0px",
                    p: "-10px 0px -10px 0px",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.32)",
                }}
            >
                {/* <video
                    src="https://youtu.be/GqOMgjUkbsI"
                    autoPlay
                    loop
                    controls
                    width={"570px"}
                    height={"325px"}
                ></video> */}
                <img
                    src="/Images/crowd_density.png"
                    width={"570px"}
                    height={"335px"}
                />
            </Box>
        </Box>
    );
};
