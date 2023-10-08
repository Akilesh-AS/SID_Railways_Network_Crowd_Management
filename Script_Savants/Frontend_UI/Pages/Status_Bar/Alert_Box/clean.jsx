import { Box, useTheme, Typography } from "@mui/material";
import React from "react";
import { ColorModeContext } from "../../../theme";
import { tokens } from "../../../theme_settings";
import timeSchedule from "/Images/clean_schedule_time.png";
import { cleanSchedule } from "../../../../Data/status_bar";


const Clean = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box
            sx={{
                background: `linear-gradient(45deg, ${colors.primary[400]} 30%,  aqua 500%)`,
                borderRadius: "20px",
                p: "30px 60px 20px 60px",
                boxShadow: "0px 0px 10px rgba(0,255,255,0.32)",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: colors.grey[100],
                    fontFamily: ["Young serif", "serif"].join(","),
                    mb: 2,
                    textAlign: "center",
                }}
            >
                Clean Schedule
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={timeSchedule}
                    alt="clean schedule"
                    width={"80px"}
                    height={"80px"}
                />
                <Typography
                    variant="h2"
                    sx={{
                        color: "aqua",
                        mb: 2,
                        textAlign: "center",
                        verticalAlign: "middle",
                        mt:2
                    }}
                >
                    {cleanSchedule}
                </Typography>
            </Box>
        </Box>
    );
};

export default Clean;
