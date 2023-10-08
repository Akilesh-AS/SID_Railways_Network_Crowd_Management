import { Box, Typography, colors, IconButton } from "@mui/material";
import React from "react";
import { Time } from "./time";
import { CurrentDate } from "./date";
import TodayIcon from "@mui/icons-material/Today";

const HeaderBar = ({ title, time = false, date = false }) => {
    return (
        <Box
            m={"0px 20px 70px 20px"}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "Space-between",
            }}
        >
            <Typography
                variant="h1"
                color={colors.grey[100]}
                fontWeight={"bold"}
            >
                {title}
            </Typography>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton sx={{mr: "10px", color: "aqua"}}>
                    <TodayIcon fontSize='large'/>
                </IconButton>
                <Box>
                    {time ? <Time /> : null}
                    {date ? <CurrentDate /> : null}  
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderBar;
