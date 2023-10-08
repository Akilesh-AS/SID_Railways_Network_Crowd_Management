import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme_settings";
import { ColorModeContext } from "../theme";
import {useTheme} from "@mui/material";
import { useContext } from "react";
import { processedDataCrowd } from "../../Data/crowd_line";

export const LineChartCrowd = () => {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
        const colorMode = useContext(ColorModeContext);

        const legendPlacement = {
            legend: {
                position: {
                    vertical: "middle",
                    horizontal: "right",
                },
                direction: "column",
            },
            margin: {
                top: 40,
                right: 150,
            },
        };

    return (
        <Box
            sx={{
                background: `linear-gradient(45deg, ${colors.primary[400]} 30%,  aqua 500%)`,
                borderRadius: "20px",
                p: "40px 60px 30px 60px",
                boxShadow: "0px 0px 10px rgba(0,255,255,0.32)",
                //   display: "flex",
                // justifyContent: "space-evenly",
                // "& .css-17ecxrr-MuiChartsLegend-label": {
                //     m: "50px"
                // }
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: colors.grey[100],
                    fontFamily: ["Young serif", "serif"].join(","),
                    mb: 0,
                    // textAlign: "center",
                }}
            >
                Crowd Records
            </Typography>
            <LineChart
                width={500}
                height={350}
                series={processedDataCrowd}
                {...legendPlacement}
                xAxis={[
                    {
                        scaleType: "point",
                        data: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                    },
                ]}
                sx={{
                    ".MuiLineElement-root": {
                        display: "none",
                    },
                    ".MuiChartsLegend-label": {
                        // color: colors.grey[900],
                        m: "50px"
                    }
                }}
            />
        </Box>
    );
}
