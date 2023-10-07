import React, { createContext, useState, useMemo } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { themeSettings, tokens } from "./theme_settings";


// function for the color mode context
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});


// function for the using custom theme settings
export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
    }));

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};