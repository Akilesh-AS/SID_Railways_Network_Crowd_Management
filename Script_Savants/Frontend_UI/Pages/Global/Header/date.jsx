import React, {useState} from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme_settings";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export const CurrentDate = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dateFn = new Date();

    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    const day = weekDay[dateFn.getDay()];
    const date = dateFn.getDate();
    const monthName = month[dateFn.getMonth()];
    const year = dateFn.getFullYear();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            <Typography variant="h5" color={colors.grey[100]}>
                {day}, {date} {monthName} {year}
            </Typography>
        </Box>
    );
};
