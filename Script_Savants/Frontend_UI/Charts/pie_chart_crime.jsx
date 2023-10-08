import { Box } from "@mui/material";
import React from "react";
import { tokens } from "../theme_settings";
import { useTheme } from "@mui/material/styles";
import { processedDataCrime as data } from "../../Data/crime_pie";
import { ResponsivePie } from "@nivo/pie";

const PieChartCrime = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 40, bottom: 10, left: 10 }}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
            }}
            startAngle={-25}
            endAngle={90}
            innerRadius={0.5}
            padAngle={0.7}
            colors={{ scheme: "category10" }}
            cornerRadius={3}
            activeOuterRadiusOffset={35}
            borderWidth={1}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[400]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 9]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "linesUp",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
                {
                    id: "linesDown",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: 23,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: "suspicious",
                    },
                    id: "linesDown",
                },
                {
                    match: {
                        id: "low",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "high",
                    },
                    id: "linesUp",
                },
            ]}
            legends={[
                {
                    anchor: "bottom",
                    direction: "column",
                    justify: false,
                    translateX: -50,
                    translateY: -60,
                    itemsSpacing: 5,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: colors.grey[200],
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: colors.grey[400],
                            },
                        },
                    ],
                },
            ]}
        />
    );
};


export default PieChartCrime;