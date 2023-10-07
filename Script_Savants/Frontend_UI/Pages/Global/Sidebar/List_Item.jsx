import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export const Item = ({ icon, title, key, open, to, active }) => {
    return (
        <ListItem
            className={active === title ? "--list-item-active" : "--list-item"}
            key={key}
            disablePadding
            sx={{
                display: "block",
                "& a": {
                    textDecoration: "none",
                    color: "inherit",
                },
            }}
        >
            <Link to={to} sx={{ textDecoration: "none" }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        {icon}
                    </ListItemIcon>

                    <ListItemText
                        primary={title}
                        sx={{
                            opacity: open ? 1 : 0,
                            textDecoration: "none",
                        }}
                    />
                </ListItemButton>
            </Link>
        </ListItem>
    );
};
