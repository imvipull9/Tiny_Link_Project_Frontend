import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Tabs,
  Tab,
  Grow,
  CircularProgress,
  Container,
} from "@mui/material";

import URLForm from "../components/URLForm";
import LinksTable from "../components/LinksTable";
import StatsBar from "../components/StatsBar";

const API = process.env.REACT_APP_API_URL;

function Home() {
  const [links, setLinks] = useState([]);
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);

  async function loadLinks() {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/links`);
      setLinks(res.data || []);
    } catch (err) {
      console.error("API ERROR:", err);
      setLinks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* ===================== HEADER CARD ===================== */}
      <Grow in timeout={500}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 4,
            background: (theme) =>
              theme.palette.mode === "light" ? "#ffffff" : "#0f172a",
          }}
        >
          
         <Typography
  variant="h3"
  fontWeight={800}
  sx={{
    background: "linear-gradient(90deg, #1f1f1f, #6b7280)", 
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mb: 1.5,
  }}
>
  LinkPro Dashboard
</Typography>

          <Typography variant="subtitle1" color="text.secondary">
            Smart URL shortener & analytics — powered by LinkPro.
          </Typography>

          <Box sx={{ mt: 4 }}>
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              <StatsBar links={links} />
            )}
          </Box>
        </Paper>
      </Grow>

      {/* ===================== MAIN CARD (FORM + TABS) ===================== */}
      <Grow in timeout={700}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
          }}
        >
          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={(_, value) => setTab(value)}
            centered
            sx={{
              mb: 3,
              ".MuiTab-root": { fontWeight: 600 },
            }}
          >
            <Tab label="Links" />
            <Tab label="Analytics" />
          </Tabs>

          <Divider sx={{ mb: 4 }} />

          {/* ===================== LINKS TAB ===================== */}
          {tab === 0 && (
            <Box>
              {/* FORM */}
              <Box
                sx={{
                  mb: 4,
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "background.default",
                }}
              >
                <URLForm refresh={loadLinks} />
              </Box>

              {/* TABLE */}
              {loading ? (
                <Box sx={{ textAlign: "center", py: 5 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <LinksTable links={links} refresh={loadLinks} />
              )}
            </Box>
          )}

          {/* ===================== ANALYTICS TAB ===================== */}
          {tab === 1 && (
            <Box>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Analytics Summary
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Quick insights on your top-performing links.
              </Typography>

              {/* Stats in analytics tab */}
              <Box sx={{ mb: 4 }}>
                {loading ? (
                  <CircularProgress size={26} />
                ) : (
                  <StatsBar links={links} />
                )}
              </Box>

              {/* Top 5 Links */}
              <Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Top Links by Clicks
                </Typography>

                {loading ? (
                  <CircularProgress />
                ) : links.length === 0 ? (
                  <Typography color="text.secondary">
                    No links created yet.
                  </Typography>
                ) : (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      p: 0,
                      m: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {[...links]
                      .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
                      .slice(0, 5)
                      .map((link) => (
                        <Paper
                          key={link.short_id}
                          component="li"
                          elevation={1}
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.6,
                          }}
                        >
                          <Typography variant="body1" fontWeight={600}>
                            {API}/{link.short_id}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ wordBreak: "break-all" }}
                          >
                            {link.original_url}
                          </Typography>

                          <Typography variant="caption" color="text.secondary">
                            Clicks: <b>{link.clicks}</b> • Created{" "}
                            {new Date(link.created_at).toLocaleString()}
                          </Typography>
                        </Paper>
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Paper>
      </Grow>
    </Container>
  );
}

export default Home;
