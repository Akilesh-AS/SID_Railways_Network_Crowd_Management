import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import { tokens } from "../../../theme_settings";
import { processedDataCrime } from "../../../../Data/crime_pie";
import PieChartCrime from "../../../Charts/pie_chart_crime";

export const CrimeBox = () => {
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
                display: "flex",
                // justifyContent: "space-evenly",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: ["Young serif", "serif"].join(","),
                        mb: 0,
                        textAlign: "start",
                    }}
                >
                    Security Alerts
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: "20px",
                    }}
                >
                    {processedDataCrime.map((item) => {
                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: item.bgcolor,
                                    borderRadius: "7px",
                                    p: 2,
                                    width: "130px",
                                    height: "170px",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: [
                                            "Young serif",
                                            "serif",
                                        ].join(","),
                                        mb: 2,
                                    }}
                                >
                                    {item.label}
                                </Typography>
                                <Typography variant="h1">
                                    {item.value}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            <Box
                sx={{
                    height: "60vh",
                    m: "-20px 20px -20px 20px",
                    maxHeight: "400px"
                }}
            >
                <PieChartCrime />
            </Box>
        </Box>
    );
};
