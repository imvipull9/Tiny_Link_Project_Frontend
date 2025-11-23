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
} from "@mui/material";

import URLForm from "../components/URLForm";
import LinksTable from "../components/LinksTable";
import StatsBar from "../components/StatsBar";

const API = process.env.REACT_APP_API_URL;

function Home() {
  const [links, setLinks] = useState([]);
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load all links
  async function loadLinks() {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/links`);
      setLinks(res.data || []);
    } catch (err) {
      console.error("❌ API ERROR:", err);
      setLinks([]);
    } finally {
      setLoading(false);
    }
  }

  // First load
  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <Box maxWidth="lg" sx={{ mx: "auto" }}>
      {/* ===================== HEADER ===================== */}
      <Grow in timeout={500}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Task_Link 🔗
          </Typography>

          <Typography variant="body1" color="text.secondary" gutterBottom>
            Modern URL shortener with stats, QR codes and a clean dashboard UI.
          </Typography>

          {/* Stats */}
          <Box sx={{ mt: 3 }}>
            {loading ? (
              <CircularProgress size={26} />
            ) : (
              <StatsBar links={links} />
            )}
          </Box>
        </Paper>
      </Grow>

      {/* ===================== MAIN CARD ===================== */}
      <Grow in timeout={700}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={(_, value) => setTab(value)}
            sx={{ mb: 2 }}
            variant="fullWidth"
          >
            <Tab label="Links" />
            <Tab label="Analytics" />
          </Tabs>

          <Divider sx={{ mb: 3 }} />

          {/* ===================== LINKS TAB ===================== */}
          {tab === 0 && (
            <Box>
              {/* Form */}
              <Box sx={{ mb: 3 }}>
                <URLForm refresh={loadLinks} />
              </Box>

              {/* Table */}
              {loading ? (
                <Box sx={{ textAlign: "center", py: 4 }}>
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
              <Typography variant="h6" gutterBottom>
                Analytics Overview
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                View your most clicked links and recent activity at a glance.
              </Typography>

              {/* Stats in analytics tab */}
              <Box sx={{ mb: 3 }}>
                {loading ? (
                  <CircularProgress size={26} />
                ) : (
                  <StatsBar links={links} />
                )}
              </Box>

              {/* Top Links */}
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Top Links by Clicks
                </Typography>

                {loading ? (
                  <CircularProgress />
                ) : links.length === 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    No data yet. Create a link first.
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
                      gap: 1.5,
                    }}
                  >
                    {[...links]
                      .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
                      .slice(0, 5)
                      .map((link) => (
                        <Box
                          key={link.short_id}
                          component="li"
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider",
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.5,
                          }}
                        >
                          <Typography variant="body2" fontWeight={600}>
                            {API}/{link.short_id}
                          </Typography>

                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ wordBreak: "break-all" }}
                          >
                            {link.original_url}
                          </Typography>

                          <Typography variant="caption">
                            Clicks:{" "}
                            <b>{link.clicks}</b> • Created:{" "}
                            {new Date(link.created_at).toLocaleString()}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Paper>
      </Grow>
    </Box>
  );
}

export default Home;
