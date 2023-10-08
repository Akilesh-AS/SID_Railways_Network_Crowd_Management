import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../../theme_settings";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Time = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(() => setTime(new Date()), 1000)
    },[])

    return (
        <Box 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            <Typography variant="h4" color={colors.grey[100]}>
                {time.toLocaleTimeString()}
            </Typography>
        </Box>
    );
};
