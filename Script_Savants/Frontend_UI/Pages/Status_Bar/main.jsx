/** @format */

import { Box, useTheme } from "@mui/material";
import * as React from "react";
import HeaderBar from "../Global/Header/main";
import { tokens } from "../../theme_settings";
import { CrimeBox } from "./Alert_Box/crime";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import Crowd from "./Alert_Box/crowd";
import Clean from "./Alert_Box/clean";
import { CrowdVideo } from "./Alert_Box/crowd_video";
import { LineChartCrowd } from "../../Charts/line_chart_crowd";

const StatusBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                mb: 5,
            }}
        >
            <HeaderBar title={"Status Bar"} time={true} date={true} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "50px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "50px",
                    }}
                >
                    <CrimeBox />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "50px",
                            justifyContent: "center",
                        }}
                    >
                        <Crowd />
                        <Clean />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "50px",
                    }}
                >
                    <CrowdVideo />
                    <LineChartCrowd />
                </Box>
            </Box>
        </Box>
    );
};

export default StatusBar;
