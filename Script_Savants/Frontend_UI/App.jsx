import React from "react";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { themeSettings, tokens } from "./theme_settings";
import { ColorModeContext, useMode } from "./theme";
import Side_Navbar from "./Pages/Global/Sidebar/Side_Navbar";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./Pages/Global/Header/main";
import StatusBar from "./Pages/Status_Bar/main";
import LiveRecord from "./Pages/Live_Recording/main";
import LiveCrowdDensityMap from "./Pages/Live_Crowd_Density_Map/main";
import CrimeNotifyRecord from "./Pages/Crime_Notification_Details/main";
import WorkersDetailList from "./Pages/Worker_Details/main";
import ComplaintRegistration from "./Pages/Complaint_Registration/main";
import Document from "./Pages/Documentation/main";
import TopBar from "./Pages/Global/Top_Bar/main";

const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box className="app" >
                    <Side_Navbar/>
                    <Box className="content">
                        <TopBar />

                        <Routes>
                            <Route path="/" element={<StatusBar/>} />
                            <Route path="/Live_Recordings" element={<LiveRecord/>} />
                            <Route path="/Live_Crowd_Density" element={<LiveCrowdDensityMap/>} />
                            <Route path="/Crime_Notifications_Alert" element={<CrimeNotifyRecord/>} />
                            <Route path="/Workers_Record_Details_List" element={<WorkersDetailList/>} />
                            <Route path="/Complaint_Registration" element={<ComplaintRegistration/>} />
                            <Route path="/Documentation_Details" element={<Document/>} />
                        </Routes>
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
