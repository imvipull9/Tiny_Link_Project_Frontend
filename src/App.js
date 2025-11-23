import React, { useMemo, useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Home from "./pages/Home";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  const [mode, setMode] = useState("light");

  // Smooth Dark/Light Mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#2563eb" },
          secondary: { main: "#0f172a" },
        },
        shape: { borderRadius: 16 },
        typography: {
          fontFamily: "Inter, Arial, sans-serif",
        },
      }),
    [mode]
  );

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        {/* Navbar */}
        <AppBar
          position="sticky"
          elevation={1}
          color="default"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              LinkPro
            </Typography>

            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ fontWeight: 600 }}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/analytics"
              color="inherit"
              sx={{ fontWeight: 600 }}
            >
              Analytics
            </Button>

            <IconButton onClick={toggleMode} color="inherit" size="small">
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box
          sx={{
            minHeight: "100vh",
            py: 4,
            px: { xs: 2, md: 4 },
            backgroundColor: mode === "light" ? "#f9fafb" : "#0f172a",
            transition: "all 0.3s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
